let db = firebase.firestore();
let auth = firebase.auth();

function switchBg() {
    var images = {
        'bg1.jpg': 'Joshua Earle',
        'bg2.jpg': 'Martin Jernberg',
        'bg3.jpg': 'Juskteez Vu'
    };
    var keys = Object.keys(images);
    var randomImage = keys[Math.floor(Math.random() * keys.length)];
    var photographer = images[randomImage];

    var body = document.getElementById('body');
    body.style.backgroundImage = 'url(/assets/img/index/' + randomImage + ')';

    var citation = document.getElementById('photo-citation')
    citation.innerHTML = 'Photo by ' + photographer + ' on <a href="https://unsplash.com" style="text-decoration: underline;">Unsplash</a>';
    citation.style.cursor = 'pointer';

    var aTag = citation.querySelector('a');
    aTag.style.color = 'gray';
    aTag.style.transition = 'color 0.3s';
    aTag.addEventListener('mouseover', function () {
        aTag.style.color = 'white';
    });
    aTag.addEventListener('mouseout', function () {
        aTag.style.color = 'gray';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    switchBg();

    firebase.auth().onAuthStateChanged(function (user) {
        const accountManagementLink = document.getElementById('accountMgnLink');
        const accountManagementText = document.getElementById('accountMgnText');
        const join_link = document.getElementById('join-link');

        if (user) {
            const userRef = db.collection('Users').doc(user.uid);
            const lastActive = new Date(); // Current timestamp
            userRef.set({
                lastActive: lastActive
            }, { merge: true });
            
            accountManagementLink.onclick = function () { firebase.auth().signOut() }
            accountManagementText.innerText = 'Log Out';

            join_link.innerHTML = 'Chat Now';
            join_link.onclick = function () { window.location = '/chat.html' };
        } else {
            accountManagementLink.onclick = function () { window.location = '/signin.html?redirect=/index.html' }
            accountManagementText.innerText = 'Log in';

            join_link.innerHTML = 'Join Now';
            join_link.onclick = function () { window.location = '/signin.html' };
        }
    });
});