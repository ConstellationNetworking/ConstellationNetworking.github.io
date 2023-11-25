let unsubscribeCurrentChatListener = null;

document.addEventListener('DOMContentLoaded', function () {
    const db = firebase.firestore();
    const messageHistory = document.getElementById('message-history');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    let otherUserID = null; // This will be set after searching for a user
    const userHistoryListDiv = document.getElementById('userHistoryList');

    const auth = firebase.auth();

    const emailSearchInput = document.getElementById('user-search-email');
    emailSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevents the default behavior of the Enter key
            searchUserByEmail(emailSearchInput.value);
        }
    });


    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log('User signed in:', user);

            const messagesCollection = db.collection('Messages');

            // send message
            sendButton.addEventListener('click', sendMessage);
            messageInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });

            // Listen for sent messages
            messagesCollection
                .where('senderId', '==', user.uid)
                .where('receiverId', '==', otherUserID)
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
                            updateChatHistory(change);
                        }
                    });
                });

            // Listen for received messages
            messagesCollection
                .where('senderId', '==', otherUserID)
                .where('receiverId', '==', user.uid)
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
                            updateChatHistory(change);
                        }
                    });
                });

            // get history users
            const userDocRef = db.collection('Users').doc(user.uid);
            userDocRef.get().then((doc) => {
                if (doc.exists) {
                    const userData = doc.data();
                    const userHistory = userData.userHistory;

                    for (const [userID, name] of Object.entries(userHistory)) {
                        const existingUserListElement = document.querySelector(`#user-${userID}`);

                        if (!existingUserListElement) {
                            db.collection('Users').doc(userID).get().then(userDoc => {
                                if (userDoc.exists) {
                                    const userDetails = userDoc.data();
                                    const profileImgURL = userDetails.profileIMG || '/assets/img/default_user.jpeg';

                                    const listItem = document.createElement('li');
                                    const userDiv = document.createElement('div');
                                    userDiv.className = 'user-history-item';

                                    const userButton = document.createElement('button');
                                    userButton.className = 'user-button flex items-center';
                                    userButton.id = `user-${userDetails.senderId}`;
                                    setupUserButtonListener(userButton);

                                    const userImage = document.createElement('img');
                                    userImage.src = profileImgURL;
                                    userImage.alt = 'Profile picture of ' + name;
                                    userImage.className = 'rounded-full mr-2';
                                    userImage.width = 50;
                                    userImage.height = 50;

                                    const userDetailsDiv = document.createElement('div');
                                    userDetailsDiv.id = 'found-user-details';

                                    const userNameP = document.createElement('p');
                                    userNameP.className = 'font-bold';
                                    userNameP.id = 'target-user';
                                    // userNameP.textContent = name + ' (User ID: ' + userID + ')';
                                    userNameP.textContent = name;

                                    const userActiveP = document.createElement('p');
                                    userActiveP.className = 'text-green-500';
                                    userActiveP.textContent = 'Active';

                                    // Append elements together
                                    userDetailsDiv.appendChild(userNameP);
                                    userDetailsDiv.appendChild(userActiveP);

                                    userButton.appendChild(userImage);
                                    userButton.appendChild(userDetailsDiv);

                                    userDiv.appendChild(userButton);
                                    listItem.appendChild(userDiv);

                                    userHistoryListDiv.appendChild(listItem);
                                    setupUserButtonListener(document.getElementById('user-ConstellationBot'));
                                } else {
                                    console.log('User doens\'t exist!')
                                }
                            })
                        }

                    }
                } else {
                    console.log('No such user found!');
                }
            }).catch((error) => {
                console.log('Error getting user:', error);
            });
        } else {
            console.log('User is not signed in');
            alert('Please sign in first. You will be directed to a sign in page.');
            window.location.href = '/signin.html';
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText && otherUserID) {
            const messagesCollection = db.collection('Messages');
            messagesCollection.add({
                senderId: auth.currentUser.uid,
                receiverId: otherUserID,
                messageText: messageText,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                messageInput.value = '';
                console.log(`Message sent successfully`);
            }).catch(error => {
                console.error("Error sending message: ", error);
            });
        }
    }

    function updateChat(user) {
        otherUserID = user.id;
        document.getElementById('message-history').innerHTML = '';

        startListeningForMessages(otherUserID);
    }

    let messageArray = [];

    const updateChatHistory = (change) => {
        const message = change.doc.data();
        if (message.timestamp) {
            messageArray.push({
                timestamp: message.timestamp.toMillis(), // Convert to milliseconds for proper comparison
                message: message,
                element: buildMessageElement(message)
            });

            messageArray.sort((a, b) => a.timestamp - b.timestamp);
            messageHistory.innerHTML = '';
            messageArray.forEach(item => {
                messageHistory.appendChild(item.element);
            });

            messageHistory.scrollTop = messageHistory.scrollHeight;
        }
    };


    function buildMessageElement(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (message.senderId === auth.currentUser.uid) {
            messageElement.classList.add('sent');
        } else {
            messageElement.classList.add('received');
        }
        messageElement.textContent = message.messageText;
        return messageElement;
    }

    function searchUserByEmail(email) {
        const usersCollection = firebase.firestore().collection('Users');

        usersCollection.where('email', '==', email).get()
            .then(snapshot => {
                if (!snapshot.empty) {
                    // User found
                    const userDoc = snapshot.docs[0];
                    const user = userDoc.data();
                    user.id = userDoc.id; // Include the doc ID in the user data
                    updateChat(user);
                    emailSearchInput.value = '';

                    // add user to userHistory
                    if (auth.currentUser) {
                        const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);

                        currentUserRef.get().then((doc) => {
                            if (doc.exists) {
                                const userHistory = doc.data().userHistory || {};
                                userHistory[user.id] = user.name;

                                currentUserRef.update({
                                    userHistory: userHistory
                                }).then(() => {
                                    updateUserHistoryList(user.id, user.name, user.profileIMG || '/assets/img/default_user.jpeg')
                                }).catch(error => {
                                    console.error('Error updating userHistory: ', error);
                                })
                            }
                        })
                    }
                } else {
                    // No user found
                    console.log('No user found with that email.');
                    alert('No user found with that email.');
                }
            })
            .catch(error => {
                console.error("Error searching for user: ", error);
                alert(`Error searching for user: ${error}`);
            });
    }

    document.getElementById('search-user-button').addEventListener('click', () => {
        const email = document.getElementById('user-search-email').value;
        searchUserByEmail(email);
    });

    function startListeningForMessages(otherUserID) {
        const messagesCollection = db.collection('Messages');
        messageHistory.innerHTML = '';

        if (unsubscribeCurrentChatListener) {
            unsubscribeCurrentChatListener();
        }

        unsubscribeCurrentChatListener = db.collection('Messages')
            .where('senderId', '==', auth.currentUser.uid)
            .where('receiverId', '==', otherUserID)
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        const message = change.doc.data();
                        const messageElement = buildMessageElement(message);
                        messageHistory.appendChild(messageElement);
                    }
                    // Add any other necessary change handling, such as 'modified' or 'removed'
                });
                messageHistory.scrollTop = messageHistory.scrollHeight; // Scroll to the bottom of the chat
            });

        // Listen for sent messages
        messagesCollection
            .where('senderId', '==', auth.currentUser.uid)
            .where('receiverId', '==', otherUserID)
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        updateChatHistory(change);
                    }
                });
            });

        // Listen for received messages
        messagesCollection
            .where('senderId', '==', otherUserID)
            .where('receiverId', '==', auth.currentUser.uid)
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        updateChatHistory(change);
                    }
                });
            });
    }


    // Define the signout function here if needed
    function signout() {
        auth.signOut()
            .then(() => {
                console.log('User signed out successfully');
                // Redirect or perform additional actions after sign-out
            })
            .catch((error) => {
                console.log('Sign-out error:', error);
                // Handle sign-out error if needed
            });
    }

    // select chat
    function handleSwitchChat(buttonID) {
        const userID = buttonID.replace('user-', '');
        const target_user_name = document.getElementById('target-user-name');
        const messageHistory = document.getElementById('message-history');

        // Unsubscribe from any existing chat listeners to prevent memory leaks and duplication
        if (unsubscribeCurrentChatListener) {
            unsubscribeCurrentChatListener();
        }

        messageHistory.innerHTML = '';

        if (userID != "ConstellationBot") {
            firebase.firestore().collection('Users').where('senderId', '==', userID).get()
                .then(snapshot => {
                    if (!snapshot.empty) {
                        // User found
                        const userDoc = snapshot.docs[0];
                        const user = userDoc.data();
                        user.id = userDoc.id; // Include the doc ID in the user data
                        updateChat(user);
                        console.log('User found:', user)
                        emailSearchInput.value = '';
                        target_user_name.innerHTML = `Your messages with ${user.name}`
                        messageHistory.innerHTML = '';

                        // add user to userHistory
                        if (auth.currentUser) {
                            const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);

                            currentUserRef.get().then((doc) => {
                                if (doc.exists) {
                                    const userHistory = doc.data().userHistory || {};
                                    userHistory[user.id] = user.name;

                                    currentUserRef.update({
                                        userHistory: userHistory
                                    }).then(() => {
                                        updateUserHistoryList(user.id, user.name, user.profileIMG || '/assets/img/default_user.jpeg')
                                    }).catch(error => {
                                        console.error('Error updating userHistory: ', error);
                                    })
                                }
                            })
                        }
                    } else {
                        // No user found
                        console.log('No user found with that email.');
                        alert('No user found with that email.');
                    }
                })
                .catch(error => {
                    console.error("Error searching for user: ", error);
                    alert(`Error searching for user: ${error}`);
                });
        } else {
            // add action for Constellation Bot AI
        }

        unsubscribeCurrentChatListener = db.collection('Messages')
            .where('senderId', '==', userID) // and other conditions
            .onSnapshot(snapshot => {
                // Processing the snapshot
                // ...
            });

        unsubscribeFromMessages = setupMessageListener(userID);
    }


    function setupMessageListener(otherUserID) {
        // Return the unsubscribe function from onSnapshot to be able to detach the listener later
        return db.collection('Messages')
            .where('receiverId', '==', auth.currentUser.uid)
            .where('senderId', '==', otherUserID)
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        const message = change.doc.data();
                        const messageElement = buildMessageElement(message);
                        messageHistory.appendChild(messageElement);
                    }
                });
                // Scroll to the latest message
                messageHistory.scrollTop = messageHistory.scrollHeight;
            });
    }

    function setupUserButtonListener(button) {
        button.addEventListener('click', () => {
            handleSwitchChat(button.id);
        });

    }

    function updateUserHistoryList(userID, userName, profileImgURL) {
        const db = firebase.firestore();
        const auth = firebase.auth();
        const userHistoryListDiv = document.getElementById('userHistoryList');

        db.collection('Users').doc(auth.currentUser.uid).get().then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                const userHistory = userData.userHistory;


                for (const [userID, name] of Object.entries(userHistory)) {
                    const existingUserListElement = document.getElementById(`user-${userID}`);

                    if (!existingUserListElement) {
                        db.collection('Users').doc(userID).get().then(userDoc => {
                            if (userDoc.exists) {
                                const userDetails = userDoc.data();
                                const profileImg = userDetails.profileIMG || '/assets/img/default_user.jpeg';

                                const listItem = document.createElement('li');
                                listItem.className = 'user-history-item';

                                const userButton = document.createElement('button');
                                userButton.className = 'user-button flex items-center';
                                userButton.id = `user-${userID}`;

                                const userImage = document.createElement('img');
                                userImage.src = profileImg;
                                userImage.alt = 'Profile picture of ' + name;
                                userImage.className = 'rounded-full mr-2';
                                userImage.width = 50;
                                userImage.height = 50;

                                const userDetailsDiv = document.createElement('div');
                                userDetailsDiv.id = 'found-user-details';

                                const userNameP = document.createElement('p');
                                userNameP.className = 'font-bold';
                                userNameP.textContent = name;

                                const userActiveP = document.createElement('p');
                                userActiveP.className = 'text-green-500';
                                userActiveP.textContent = 'Active';

                                userDetailsDiv.appendChild(userNameP);
                                userDetailsDiv.appendChild(userActiveP);

                                userButton.appendChild(userImage);
                                userButton.appendChild(userDetailsDiv);

                                listItem.appendChild(userButton);

                                userHistoryListDiv.appendChild(listItem);

                                // Setup button listener after adding to the DOM
                                setupUserButtonListener(userButton);
                            } else {
                                console.log('User doesn\'t exist!');
                            }
                        });
                    }
                }
            } else {
                console.log('No such user found!');
            }
        }).catch((error) => {
            console.log('Error getting user:', error);
        });
    }
});
