let db = firebase.firestore();
let auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function () {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            db.collection('Users').doc(auth.currentUser.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        const data = doc.data();

                        document.getElementById('currentUser-name').innerHTML = data.name;
                        document.getElementById('currentUser-email').innerHTML = data.email;
                        document.getElementById('currentUser-profile-picture').src = data.profileIMG == "" ? '/assets/img/default_user.jpeg' : data.profileIMG
                        document.getElementById('currentUser-profile-picture').alt = `Profile picture of ${data.name}`;
                    }
                })
        }
    });
});