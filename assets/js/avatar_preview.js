let db = firebase.firestore();
let auth = firebase.auth();

document.addEventListener('DOMContentLoaded', function() {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            userRef = db.collection("Users").doc(user.uid);

            userRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();

                    document.getElementById('head').src = `/assets/img/create_avatar/${data.avatar.head}.png`;
                    document.getElementById('hair').src = `/assets/img/create_avatar/${data.avatar.hair}.png`;
                }
            })
        } else {
            window.location = '/signin.html';
        }
    })
})