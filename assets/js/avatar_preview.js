let db = firebase.firestore();
let auth = firebase.auth();

document.addEventListener('DOMContentLoaded', function() {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            userRef = db.collection("Users").doc(user.uid);
            console.log('userref loaded')

            userRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();

                    const head = document.getElementById('head');
                    const hair = document.getElementById('hair');
                    head.src = `/assets/img/create_avatar/${data.avatar.head}.png`;
                    hair.src = `/assets/img/create_avatar/${data.avatar.hair}.png`;

                    head.style.width = '100px';
                    head.style.height = '100px';
                    hair.style.width = '100px';
                    hair.style.height = '100px';

                    head.style.position = 'absolute';
                    hair.style.position = 'absolute';
                }
            })
        } else {
            window.location = '/signin.html';
        }
    })
})