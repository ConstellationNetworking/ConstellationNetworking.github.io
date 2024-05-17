let chosenAvatar = {};
let chosenBg = null;
let db = firebase.firestore()
let auth = firebase.auth()

function setHead(id) {
    chosenAvatar.head = id;
    smoothScrollAboveElement('hairstyle', 50);

    ['d1', 'd2', 'd3'].filter(head => head !== id).forEach(head => document.getElementById(head).innerHTML = 'Choose');
    document.getElementById(id).innerHTML = `Remove`
}

function setHair(id) {
    chosenAvatar.hair = id;
    smoothScrollAboveElement('background', 50);

    ['h1', 'h2'].filter(hair => hair !== id).forEach(hair => document.getElementById(hair).innerHTML = 'Choose');
    document.getElementById(id).innerHTML = `Remove`
}

function setBg(id) {
    const imgElements = document.querySelectorAll('#background .grid img');
    imgElements.forEach(img => img.classList.add('t-selected'))
    document.getElementById(id).classList.remove('t-selected')
    smoothScrollAboveElement('saveActions', 50)
    chosenBg = id;
}

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

function saveAvatar() {
    if (chosenAvatar.head && chosenAvatar.hair) {
        const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);
        currentUserRef.update({
            avatar: chosenAvatar,
            bg: chosenBg
        }).then(() => {
            console.log('Avatar updated');

            db.collection('Users').doc(auth.currentUser.uid).collection('Missions').where('title', '==', "Welcome to your first mission!").get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            const tasks = doc.data().tasks || {};
                            tasks['Edit your avatar.'] = true;

                            db.collection('Users').doc(auth.currentUser.uid).collection('Missions').doc(doc.id).update({ tasks: tasks })
                                .then(() => {
                                    window.location.href = '/index.html';
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                        });
                    })
                    .catch((error) => {
                        console.error('Error getting mission:', error);
                    });
        }).catch((error) => {
            console.error(error);
        })
    }
}

document.addEventListener('DOMContentLoaded', function() {
    auth.onAuthStateChanged(user => {
        if (!user) {
            window.location = '/signin.html';
        }
    })
});