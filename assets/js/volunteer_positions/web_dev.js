let auth = firebase.auth();
let db = firebase.firestore();

function apply() {
    let firstname = document.getElementById('first-name').value;
    let lastname = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let street_address = document.getElementById('street-address').value;
    let city = document.getElementById('city').value;
    let region = document.getElementById('region').value;
    let postal_code = document.getElementById('postal-code').value;
    let linkedin_username = document.getElementById('linkedin-username').value;
    let about_field = document.getElementById('about-textarea').value;
    let skills_field = document.getElementById('skills-textarea').value;

    if (!firstname || !lastname || !email || !country || !street_address || !city || !region || !postal_code || !linkedin_username || !about_field || !skills_field) {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    db.collection('Open_Volunteer').doc('web_developer').collection('Applicants').doc(`${firstname}-${lastname}`).set({
        name: `${firstname} ${lastname}`,
        email: email,
        country: country,
        street_address: street_address,
        city: city,
        region: region,
        postal_code: postal_code,
        linkedin_username: linkedin_username,
        about: about_field,
        skills: skills_field
    }).then(() => {
        alert('Application submitted successfully!');
        window.location = '/volunteer_positions.html';
    }).catch((err) => {
        console.error(err);
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('Open_Volunteer').doc('web_developer').get()
                .then((doc) => {
                    if (doc.exists) {
                        let data = doc.data();

                        let position_title = document.getElementById('position-title');
                        let weekly_hours = document.getElementById('weekly-hours');
                        let location = document.getElementById('location');
                        let about = document.getElementById('about');

                        position_title.innerHTML = data.title;
                        location.innerHTML = data.location;
                        weekly_hours.innerHTML = data.hours;
                        about.innerHTML = data.about;

                    } else {
                        window.location = '/volunteer_positions.html';
                    }
                }).catch((error) => {
                    console.error("Error getting document:", error);
                });
        } else {
            window.location = '/signin.html';
        }
    });
});