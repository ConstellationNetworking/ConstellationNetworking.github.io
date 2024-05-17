let db = firebase.firestore();
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

function sell(name, astral_tokens) {
    if (confirm(`Are you sure you want to sell ${name}?`)) {
        db.collection('Users').doc(auth.currentUser.uid).collection('Redeemed_Items').where('item', '==', name).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                db.collection('Users').doc(auth.currentUser.uid).collection('Redeemed_Items').doc(doc.id).delete()
                .then(() => {
                    db.collection('Users').doc(auth.currentUser.uid).get().then((doc) => {
                        if (doc.exists) {
                            const data = doc.data();
    
                            db.collection('Users').doc(auth.currentUser.uid).update({
                                astral_tokens: data.astral_tokens += parseInt(astral_tokens)
                            })
                            .then(() => {
                                location.reload();
                            })
                            .catch((error) => {
                                console.error('Error deleting redeemed item', error);
                                alert('Unable to sell item. Please try again later.');
                            })
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting redeemed item', error);
                        alert('Unable to sell item. Please try again later.');
                    })
                })
                .catch((error) => {
                    console.error('Error deleting redeemed item', error);
                    alert('Unable to sell item. Please try again later.');
                })
            })
        })
    }
}

function redeem(name, astral_tokens) {
    db.collection('Users').doc(auth.currentUser.uid).get()
        .then((doc) => {
            if (doc.exists) {
                const data = doc.data();

                if (data.astral_tokens >= parseInt(astral_tokens)) {
                    // redeem
                    db.collection('Users').doc(auth.currentUser.uid).update({
                        astral_tokens: data.astral_tokens - parseInt(astral_tokens)
                    })
                    document.getElementById('available-astral_tokens').innerHTML = data.astral_tokens - parseInt(astral_tokens);

                    db.collection('Users').doc(auth.currentUser.uid).collection('Redeemed_Items').add({
                        item: name,
                        astral_tokens: parseInt(astral_tokens),
                        redeemedAt: new Date()
                    })
                        .then(() => {
                            alert(`Successfully Redeemed ${name}!`)
                            location.reload();
                        })
                        .catch((err) => {
                            console.error(err);
                        })
                } else {
                    alert('You don\'t have enough astral tokens to redeem!')
                }
            }
        })
}

document.addEventListener("DOMContentLoaded", function () {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            const userRef = db.collection('Users').doc(user.uid);
            const lastActive = new Date(); // Current timestamp
            userRef.set({
                lastActive: lastActive
            }, { merge: true });

            db.collection('Users').doc(auth.currentUser.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        const data = doc.data();

                        document.getElementById('currentUser-name').innerHTML = data.name;
                        document.getElementById('currentUser-email').innerHTML = data.email;
                        document.getElementById('currentUser-profile-picture').src = data.profileIMG == "" ? '/assets/img/default_user.jpeg' : data.profileIMG
                        document.getElementById('currentUser-profile-picture').alt = `Profile picture of ${data.name}`;
                        document.getElementById('available-astral_tokens').innerHTML = data.astral_tokens;
                    }
                })

            db.collection('Users').doc(auth.currentUser.uid).collection('Redeemed_Items').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();

                        const div = document.createElement('div');
                        div.className = 'max-w-sm bg-white border border-gray-200 rounded-lg shadow-md';

                        const img = document.createElement('img');
                        img.className = 'rounded-t-lg';
                        img.src = `/assets/img/rewards/${data.item.toLowerCase().replace(/ /g, '_')}.png`;
                        div.appendChild(img);

                        const divInner = document.createElement('div');
                        divInner.className = 'p-4';
                        div.appendChild(divInner);

                        const h5 = document.createElement('h5');
                        h5.className = 'mb-2 text-xl font-bold tracking-tight text-gray-900';
                        h5.textContent = data.item;
                        divInner.appendChild(h5);

                        const p = document.createElement('p');
                        p.className = 'text-gray-600';
                        p.textContent = `astral_tokens: ${data.astral_tokens}`;
                        divInner.appendChild(p);

                        const button = document.createElement('Sell');
                        button.className = 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10';
                        button.style.textDecoration = 'none';
                        button.style.cursor = 'pointer';
                        button.dataset.name = data.item;
                        button.dataset.redeem = data.astral_tokens;
                        button.onclick = function() {
                            sell(data.item, data.astral_tokens);
                        };
                        button.textContent = 'Sell';
                        divInner.appendChild(button);

                        document.getElementById('myrewards-items').appendChild(div);
                    })
                })
        } else {
            window.location.href = '/signin.html';
        }
    });
});