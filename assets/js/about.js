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
                animateValue('monthly-active-users', 0, querySnapshot.size, 500)
            });


        db.collection('Statistics').doc('website-views').get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    animateValue('website-views', 0, data.views, 500)
                } else {
                    console.error('No document exists.')
                }
            })
            .catch(error => {
                console.error(error);
            })

        db.collection('Messages')
            .get()
            .then(querySnapshot => {
                animateValue('messages-sent', 0, querySnapshot.size, 500)
            });
    }, 500);
});

function animateValue(id, start, end, duration) {
    let range = start - end
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    let timer = setInterval(function () {
        current += increment;
        obj.innerText = current.toLocaleString();
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime)
}

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