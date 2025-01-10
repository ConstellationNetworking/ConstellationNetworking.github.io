let db = firebase.firestore();

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

function submitForm() {
    email = document.getElementById('email').value;

    if (!email) {
        document.getElementById('email').placeholder = 'Please enter a valid email address';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email').value = '';
        document.getElementById('email').placeholder = 'Please enter a valid email address';
        return;
    }

    db.collection('ComingSoonSubscribers').add({
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        browserInfo: navigator.userAgent
    })
    .then((docRef) => {
        document.getElementById('email').value = '';
        document.getElementById('email').placeholder = 'Thank you for subscribing!';
        document.getElementById('submitBtn').innerHTML = 'Done!';
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    const db = firebase.firestore();
    const tableBody = document.getElementById('positions-table-body');

    db.collection('Open_Volunteer').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const row = document.createElement('tr');

            const titleCell = document.createElement('td');
            titleCell.className = 'pr-6 py-4 whitespace-nowrap'
            titleCell.textContent = data.title;
            row.appendChild(titleCell);

            const aboutCell = document.createElement('td');
            aboutCell.textContent = data.about;
            row.appendChild(aboutCell);

            const hoursCell = document.createElement('td');
            hoursCell.textContent = data.hours;
            row.appendChild(hoursCell);

            const locationCell = document.createElement('td');
            locationCell.textContent = data.location;
            row.appendChild(locationCell);

            const actionCell = document.createElement('td');
            const actionLink = document.createElement('a');
            actionLink.href = data.url;
            const actionSpan = document.createElement('span');
            actionSpan.textContent = data.action;
            actionSpan.className = `px-3 py-2 rounded-full font-semibold text-xs ${data.action === 'Active' ? 'text-green-600 bg-green-50' : 'text-blue-600 bg-blue-50'}`;
            actionLink.appendChild(actionSpan);
            actionCell.appendChild(actionLink);
            row.appendChild(actionCell);

            tableBody.appendChild(row);
        });
    });
});

try {
    let db = firebase.firestore();
    let auth = firebase.auth();
} catch {
    console.error('[ERROR] Unable to load firebase db & auth.')
}

function switchBg(bg) {
    var images = {
        'bg1.jpg': 'Joshua Earle',
        'bg2.jpg': 'Martin Jernberg',
        'bg3.jpg': 'Juskteez Vu',
        't1.png': 'Jason Leung',
        't2.png': 'Pawel Czerwinski'
    };

    if (bg) {
        var randomImage = bg;
        var photographer = images[bg];
    } else {
        var keys = Object.keys(images);
        var randomImage = keys[Math.floor(Math.random() * keys.length)];
        var photographer = images[randomImage];

        auth.onAuthStateChanged(function (user) {
            if (user) {
                const userRef = db.collection('Users').doc(user.uid)
                userRef.update({
                    bg: randomImage
                }).then(() => {
                    console.log('Updated bg image.');
                }).catch((error) => {
                    console.error(error);
                })
            }
        })
    }
    
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