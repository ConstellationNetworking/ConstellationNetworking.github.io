document.addEventListener('DOMContentLoaded', function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('User signed in:', user);
        } else {
            console.log('User is not signed in');
        }
    });

    function signout() {
        firebase.auth().signOut()
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

const db = firebase.firestore();

// Authentication state observer and get user data
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        const currentUserID = user.uid; // The logged-in user's ID
        const otherUserID = document.getElementById('other-user-id').textContent; // The other person in the conversation
        const messagesCollection = db.collection('Messages');

        // Query for messages in the direct conversation
        const messagesQuery = messagesCollection
            .where('senderId', 'in', [currentUserID, otherUserID])
            .where('receiverId', 'in', [currentUserID, otherUserID])
            .orderBy('timestamp', 'asc'); // Ordering by timestamp for chronological order

        // Real-time listener for messages
        messagesQuery.onSnapshot(snapshot => {
            const messageHistory = document.getElementById('message-history');
            // Clear existing messages in the UI
            messageHistory.innerHTML = '';

            snapshot.forEach(doc => {
                const message = doc.data();

                // Create message element
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');
                if (message.senderId === currentUserID) {
                    messageElement.classList.add('sent');
                } else {
                    messageElement.classList.add('received');
                }
                messageElement.textContent = message.messageText;

                // Append to message history
                messageHistory.appendChild(messageElement);
            });

            // Scroll to the bottom of the message history
            messageHistory.scrollTop = messageHistory.scrollHeight;
        });

        // Send message logic
        document.getElementById('send-button').addEventListener('click', () => {
            const messageInput = document.getElementById('message-input');
            const messageText = messageInput.value.trim();

            if (messageText) {
                // Add a new message to the Messages collection
                messagesCollection.add({
                    senderId: currentUserID,
                    receiverId: otherUserID,
                    messageText: messageText,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp() // Sets the timestamp to the server time
                })
                    .then(() => {
                        messageInput.value = ''; // Clear the message input field
                    })
                    .catch(error => {
                        console.error("Error sending message: ", error);
                    });
            }
        });
    } else {
        // User is signed out.
        // ...
    }
});