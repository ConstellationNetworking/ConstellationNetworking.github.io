document.addEventListener('DOMContentLoaded', function () {
    const auth = firebase.auth();
    const db = firebase.firestore();
    const messageHistory = document.getElementById('message-history');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    let otherUserID = null;
    const userHistoryListDiv = document.getElementById('userHistoryList');
    let currentMessagesListener = null;

    const emailSearchInput = document.getElementById('user-search-email');
    emailSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchUserByEmail(emailSearchInput.value);
        }
    });

    function unbsubscribeFromMessages() {
        if (currentMessagesListener) {
            currentMessagesListener();
            currentMessagesListener = null;
        }
    }

    function subscribeToMessages(otherUserID) {
        unbsubscribeFromMessages();

        // old
        // currentMessagesListener = db.collection('Messages')
        //     .where('receiverId', '==', auth.currentUser.uid)
        //     .where('senderId', '==', otherUserID)
        //     .orderBy('timestamp', 'asc')
        //     .onSnapshot(snapshot => {
        //         snapshot.docChanges().forEach(change => {
        //             if (change.type === "added") {
        //                 updateChatHistory(change.doc.data());
        //             }
        //         });
        //     }, error => {
        //         console.error("Error getting messages: ", error);
        //     });

        // new test try
        const messageCollection = db.collection('Messages');
        
        messageCollection
        .where('chatId', '==', getChatId(auth.currentUser.uid, otherUserID))
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                    updateChatHistory(change.doc.data());
                }
            })
        })
    }

    function cleanChatHistory() {
        const messageHistory = document.getElementById('message-history');
        messageHistory.innerHTML = '';
    }

    function switchUserChat(otherUserID) {
        unbsubscribeFromMessages();
        cleanChatHistory();
        subscribeToMessages(otherUserID);
    }

    function updateChatHistory(message) {
        const messageHistory = document.getElementById('message-history');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (message.senderId === auth.currentUser.uid) {
            messageElement.classList.add('sent');
        } else {
            messageElement.classList.add('received');
        }
        messageElement.innerHTML = message.messageText;
        messageHistory.appendChild(messageElement);
        messageHistory.scrollTop = messageHistory.scrollHeight;
    }

    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log('User signed in:', user);

            // send message
            sendButton.addEventListener('click', sendMessage);
            messageInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
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
                                    userNameP.textContent = name;

                                    const userActiveP = document.createElement('p');
                                    userActiveP.className = 'text-green-500';
                                    userActiveP.textContent = 'Active';

                                    // Add elements together
                                    userDetailsDiv.appendChild(userNameP);
                                    userDetailsDiv.appendChild(userActiveP);

                                    userButton.appendChild(userImage);
                                    userButton.appendChild(userDetailsDiv);

                                    userDiv.appendChild(userButton);
                                    listItem.appendChild(userDiv);

                                    userHistoryListDiv.appendChild(listItem);
                                    setupUserButtonListener(document.getElementById('user-ConstellationBot'));
                                } else {
                                    console.error('User doens\'t exist.')
                                }
                            })
                        }
                    }
                } else {
                    console.error('User not found.');
                }
            }).catch((error) => {
                console.error('Error getting user:', error);
            });
        } else {
            console.error('User is not signed in.');
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
                chatId: getChatId(auth.currentUser.uid, otherUserID),
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

    function searchUserByEmail(email) {
        const usersCollection = firebase.firestore().collection('Users');

        usersCollection.where('email', '==', email).get()
            .then(snapshot => {
                if (!snapshot.empty) {
                    const userDoc = snapshot.docs[0];
                    const user = userDoc.data();
                    user.id = userDoc.id;
                    updateChat(user);
                    emailSearchInput.value = '';

                    if (auth.currentUser) {
                        const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);
                        currentUserRef.get().then((currentUserDoc) => {
                            if (currentUserDoc.exists) {
                                const currentUserHistory = currentUserDoc.data().userHistory || {};
                                currentUserHistory[user.id] = user.name;

                                currentUserRef.update({
                                    userHistory: currentUserHistory
                                }).then(() => {
                                    updateUserHistoryList(user.id, user.name, user.profileIMG || '/assets/img/default_user.jpeg')
                                }).catch(error => {
                                    console.error('Error updating userHistory: ', error);
                                })

                                // set other user's userHistory
                                const otherUserRef = db.collection('Users').doc(otherUserID);
                                otherUserRef.get().then((otherUserDoc) => {
                                    if (otherUserDoc.exists) {
                                        const otherUserHistory = otherUserDoc.data().userHistory || {};
                                        otherUserHistory[auth.currentUser.uid] = currentUserDoc.data().name;

                                        otherUserRef.update({
                                            userHistory: otherUserHistory
                                        }).then(() => {
                                            updateUserHistoryList(auth.currentUser.uid, currentUserDoc.data().name, currentUserDoc.data().profileIMG || '/assets/img/default_user.jpeg') // MARK:- This line was commented out without reason.
                                        }).catch(error => {
                                            console.error('Error updating userHistory: ', error);
                                        })
                                    }
                                })
                            }
                        })
                    }
                } else {
                    alert('User not found.');
                    console.error('User not found.');
                }
            })
            .catch(error => {
                alert(`Error searching for user: ${error}`);
                console.error("Error searching for user: ", error);
            });
    }

    document.getElementById('search-user-button').addEventListener('click', () => {
        const email = document.getElementById('user-search-email').value;
        searchUserByEmail(email);
    });

    function startListeningForMessages(otherUserID) {
        const messagesCollection = db.collection('Messages');
        messageHistory.innerHTML = '';

        // // sent messages
        // messagesCollection
        //     .where('senderId', '==', auth.currentUser.uid)
        //     .where('receiverId', '==', otherUserID)
        //     .orderBy('timestamp', 'asc')
        //     .onSnapshot(snapshot => {
        //         snapshot.docChanges().forEach(change => {
        //             if (change.type === "added") {
        //                 updateChatHistory(change.doc.data());
        //             }
        //         });
        //     });

        // MARK:- Seems to solve message duplication issue.
        // // received messages
        // messagesCollection
        //     .where('senderId', '==', otherUserID)
        //     .where('receiverId', '==', auth.currentUser.uid)
        //     .orderBy('timestamp', 'asc')
        //     .onSnapshot(snapshot => {
        //         snapshot.docChanges().forEach(change => {
        //             if (change.type === "added") {
        //                 updateChatHistory(change.doc.data());
        //             }
        //         });
        //     });
    }

    // signout
    function signout() {
        auth.signOut()
            .then(() => {
                console.log('User signed out successfully');
                window.location.href = '/signin.html';
            })
            .catch((error) => {
                console.error('Sign-out error:', error);
                alert(`An error occured while signing out. Please try again or see console for logs.`)
            });
    }

    // select chat
    function handleSwitchChat(buttonID) {
        const userID = buttonID.replace('user-', '');
        const target_user_name = document.getElementById('target-user-name');
        const messageHistory = document.getElementById('message-history');
        messageHistory.innerHTML = '';

        if (userID != "ConstellationBot") {
            firebase.firestore().collection('Users').where('senderId', '==', userID).get()
                .then(snapshot => {
                    if (!snapshot.empty) {
                        const userDoc = snapshot.docs[0];
                        const user = userDoc.data();
                        user.id = userDoc.id;
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
                        console.error('User not found.');
                        alert('User not found.');
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
            switchUserChat(button.id.replace('user-', ''));
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

                                setupUserButtonListener(userButton);
                            } else {
                                console.error('User doesn\'t exist.');
                            }
                        });
                    }
                }
            } else {
                console.error('User not found.');
            }
        }).catch((error) => {
            console.error('Error getting user:', error);
        });
    }
});

function getChatId(userId1, userId2) {
    return [userId1, userId2].sort().join('-');
}