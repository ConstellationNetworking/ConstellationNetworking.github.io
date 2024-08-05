let db = firebase.firestore()
let auth = firebase.auth();

function smoothScrollAboveElement(elementId, offset) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.pageYOffset;
        window.scrollTo({
            top: elementTop - offset,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    auth.onAuthStateChanged(function(user) {
        if (user) {
            const userRef = db.collection("Users").doc(auth.currentUser.uid);
            const lastActive = new Date(); // Current timestamp
            userRef.set({
                lastActive: lastActive
            }, { merge: true });
            
            userRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    
                    document.getElementById('user-profile-img').src = data.profileIMG == "" ? '/assets/img/default_user.jpeg' : data.profileIMG
                    document.getElementById('user-novacoins').innerText = `$${data.novacoins}`
                }
            })
        }
    })
});