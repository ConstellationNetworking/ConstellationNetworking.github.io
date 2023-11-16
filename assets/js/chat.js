document.addEventListener('DOMContentLoaded', function () {
    const db = firebase.firestore();
    const messageHistory = document.getElementById('message-history');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const otherUserID = document.getElementById('other-user-id').textContent; // Replace with actual ID

    const auth = firebase.auth();

    const updateChatHistory = (change) => {
        const message = change.doc.data();
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (message.senderId === auth.currentUser.uid) {
            messageElement.classList.add('sent');
        } else {
            messageElement.classList.add('received');
        }
        messageElement.textContent = message.messageText;
        messageHistory.appendChild(messageElement);
        messageHistory.scrollTop = messageHistory.scrollHeight;
    };

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
                    .then(() => {
                        messageInput.value = '';
                        console.log(`Message "${messageText}" sent successfully`);
                    })
                    .catch(error => {
                        console.error("Error sending message: ", error);
                        alert(`Error sending message: ${error}}`)
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
