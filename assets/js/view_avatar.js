let auth = firebase.auth();
let db = firebase.firestore();
let head = null;
let hair = null;

document.addEventListener("DOMContentLoaded", function() {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            let userRef = db.collection('Users').doc(user.uid).get()
            .then(doc => {
                if (doc.exists) {
                    head = doc.data().avatar.head;
                    hair = doc.data().avatar.hair;
                    document.getElementById('head').src = `/assets/img/create_avatar/${head}.png`;
                    document.getElementById('hair').src = `/assets/img/create_avatar/${hair}.png`;

                    document.getElementById('hair').classList.add(hair)
                }
            })
        }
    })
});