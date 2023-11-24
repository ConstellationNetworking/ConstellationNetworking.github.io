document.addEventListener('DOMContentLoaded', function () {
    firebase.auth().onAuthStateChanged(function (user) {
        const accountManagementLink = document.getElementById('accountMgnLink');
        const accountManagementText = document.getElementById('accountMgnText');
        const join_link = document.getElementById('join-link');
        
        if (user) {
            accountManagementLink.onclick = function () { firebase.auth().signOut() }
            accountManagementText.innerText = 'Log Out';

            join_link.innerHTML = 'Chat Now';
            join_link.href = '/chat.html';
        } else {
            accountManagementLink.onclick = function() { window.location = '/signin.html?redirect=/index.html' }
            accountManagementText.innerText = 'Log in';

            join_link.innerHTML = 'Join Now';
            join_link.href = '/signin.html';
        }
    });
});