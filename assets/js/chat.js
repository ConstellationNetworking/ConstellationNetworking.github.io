document.addEventListener('DOMContentLoaded', function () {
    const db = firebase.firestore();
    const messageHistory = document.getElementById('message-history');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    let otherUserID = null; // This will be set after searching for a user
    const userHistoryListDiv = document.getElementById('userHistoryList');

    const auth = firebase.auth();

    // Assuming you have an input field with the ID 'user-search-email'
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

            const sendMessage = () => {
                const messageText = messageInput.value.trim();
                if (messageText) {
                    messagesCollection.add({
                        senderId: user.uid,
                        receiverId: otherUserID,
                        messageText: messageText,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                        .then((docRef) => {
                            messageInput.value = '';
                            console.log(`Message "${messageText}" sent successfully`);
                            // Retrieve the message to get the timestamp
                            docRef.get().then((doc) => {
                                if (doc.exists) {
                                    updateChatHistory({ doc: doc, type: "added" });
                                }
                            });
                        })
                        .catch(error => {
                            console.error("Error sending message: ", error);
                            alert(`Error sending message: ${error}`)
                        });
                }
            };


            sendButton.addEventListener('click', sendMessage);

            messageInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault(); // Prevents the default behavior of the Enter key
                    sendMessage();
                }
            });
            
            // get history users
            const userDocRef = db.collection('Users').doc(user.uid);
            userDocRef.get().then((doc) => {
                if (doc.exists) {
                    const userData = doc.data();
                    const userHistory = userData.userHistory;

                    userHistoryListDiv.innerHTML = `
                    <li>
                        <div class="user-history-item">
                            <button class="user-button flex items-center" id="user-ConstellationBot">
                                <img src="/assets/img/constellation_bot.png" width="50" height="50" alt="Profile picture of Constellation Bot" class="rounded-full mr-2">
                                <div id="found-user-details">
                                    <p class="font-bold" id="target-user">Constellation Bot</p>
                                    <p class="text-green-500">Active</p>
                                </div>
                            </button>
                        </div>
                    </li>
                    `;

                    for (const [userID, name] of Object.entries(userHistory)) {
                        db.collection('Users').doc(userID).get().then(userDoc => {
                            if (userDoc.exists) {
                                const userDetails = userDoc.data();
                                const profileImgURL = userDetails.profileIMG || 'https://placehold.co/50x50?text=Profile';

                                const listItem = document.createElement('li');
                                const userDiv = document.createElement('div');
                                userDiv.className = 'user-history-item';

                                const userButton = document.createElement('button');
                                userButton.className = 'user-button flex items-center';
                                userButton.id = `user-${userID}`;
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
    let currentChatUserID = null;

    // Function to update the chat with the new user
    function updateChat(user) {
        // Update the currentChatUserID
        otherUserID = user.id;

        // Remove existing chat messages
        document.getElementById('message-history').innerHTML = '';

        // Now, start listening for messages with the new chat
        startListeningForMessages(otherUserID);
    }

    let messageArray = [];

    const updateChatHistory = (change) => {
        const message = change.doc.data();
        // Adding a check for the timestamp, as the server timestamp might be set asynchronously
        if (message.timestamp) {
            messageArray.push({
                timestamp: message.timestamp.toMillis(), // Convert to milliseconds for proper comparison
                message: message,
                element: buildMessageElement(message)
            });

            // Sort messages by timestamp in ascending order
            messageArray.sort((a, b) => a.timestamp - b.timestamp);

            // Clear existing messages
            messageHistory.innerHTML = '';

            // Append sorted messages
            messageArray.forEach(item => {
                messageHistory.appendChild(item.element);
            });

            // Scroll to the bottom
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

    // Function to search for a user by email
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
                                    updateUserHistoryList(user.id, user.name, user.profileIMG || 'https://placehold.co/50x50?text=Profile')
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
                                    updateUserHistoryList(user.id, user.name, user.profileIMG || 'https://placehold.co/50x50?text=Profile')
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
        const userDocRef = db.collection('Users').doc(auth.currentUser.uid);
        userDocRef.get().then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                const userHistory = userData.userHistory;
    
                userHistoryListDiv.innerHTML = `
                <li>
                    <div class="user-history-item">
                        <button class="user-button flex items-center" id="user-ConstellationBot">
                            <img src="/assets/img/constellation_bot.png" width="50" height="50" alt="Profile picture of Constellation Bot" class="rounded-full mr-2">
                            <div id="found-user-details">
                                <p class="font-bold" id="target-user">Constellation Bot</p>
                                <p class="text-green-500">Active</p>
                            </div>
                        </button>
                    </div>
                </li>
                `;
    
                console.log(userHistory)
    
                for (const [userid, name] of Object.entries(userHistory)) {
                    db.collection('Users').doc(userid).get().then(userDoc => {
                        if (userDoc.exists) {
                            const userDetails = userDoc.data();
                            const profileImgURL = userDetails.profileIMG || 'https://placehold.co/50x50?text=Profile';
    
                            const listItem = document.createElement('li');
                            const userDiv = document.createElement('div');
                            userDiv.className = 'user-history-item';
    
                            const userButton = document.createElement('button');
                            userButton.className = 'user-button flex items-center';
                            userButton.id = `user-${userID}`;
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
            } else {
                console.log('No such user found!');
            }
        }).catch((error) => {
            console.log('Error getting user:', error);
        });
    }
});

