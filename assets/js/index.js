function switchBg() {
    var images = ['bg.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
    var body = document.getElementById('body');
    var randomImage = images[Math.floor(Math.random() * images.length)];
    body.style.backgroundImage = 'url(/assets/img/index/' + randomImage + ')';
}

document.addEventListener('DOMContentLoaded', function () {
    switchBg();

    firebase.auth().onAuthStateChanged(function (user) {
        const accountManagementLink = document.getElementById('accountMgnLink');
        const accountManagementText = document.getElementById('accountMgnText');
        const join_link = document.getElementById('join-link');
        
            if (user) {
                accountManagementLink.onclick = function () { firebase.auth().signOut() }
                accountManagementText.innerText = 'Log Out';

                join_link.innerHTML = 'Chat Now';
                join_link.onclick = function() { window.location = '/chat.html' };
            } else {
                accountManagementLink.onclick = function() { window.location = '/signin.html?redirect=/index.html' }
                accountManagementText.innerText = 'Log in';

                join_link.innerHTML = 'Join Now';
                join_link.onclick = function() { window.location = '/signin.html' };
            }
        });

});