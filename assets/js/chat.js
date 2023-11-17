document.addEventListener('DOMContentLoaded', function () {
    const db = firebase.firestore();
    const messageHistory = document.getElementById('message-history');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    let otherUserID = null; // This will be set after searching for a user

    const auth = firebase.auth();

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
                    e.preventDefault();
                    sendMessage();
                }
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
        const targetUser = document.getElementById('target-user');
        const otherUserIdElem = document.getElementById('other-user-id');

        // Set the name and ID in the chat header
        targetUser.textContent = user.name; // Assuming 'name' is the field in the user document
        otherUserIdElem.textContent = user.id;

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
                    console.log('User found:', user)
                    alert('Start texting with ' + user.name + '!')
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
});