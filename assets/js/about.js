let db = firebase.firestore();
let auth = firebase.auth();

document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());

    setTimeout(() => {
        db.collection('Users')
            .where('lastActive', '>=', lastMonth)
            .get()
            .then(querySnapshot => {
                document.getElementById('monthly-active-users').innerText = querySnapshot.size.toLocaleString();
            });

        db.collection('Messages')
            .get()
            .then(querySnapshot => {
                document.getElementById('messages-sent').innerText = querySnapshot.size.toLocaleString();
            });

        db.collection('Statistics').doc('website-views').get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    document.getElementById('website-views').innerText = data.views.toLocaleString();
                } else {
                    console.error('No document exists.')
                }
            })
            .catch(error => {
                console.error(error);
            })
    }, 1000); // 1000 milliseconds = 1 second
});

function addToNewsletter() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('newsletter-email').value

    if (email === '' || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
    } else {
        db.collection('ReceivesNewsletter').add({
            email: email,
            addedDate: new Date(),
            pageAddedFrom: window.location.href
        })

        alert('You have been added to the newsletter.')
    }
}