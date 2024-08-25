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

function sell(name, novacoins) {
    if (confirm(`Are you sure you want to sell ${name}?`)) {
        db.collection('Users').doc(auth.currentUser.uid).collection('Redeemed_Items').where('item', '==', name).limit(1).get().then((querySnapshot) => {
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                db.collection('Users').doc(auth.currentUser.uid).collection('Redeemed_Items').doc(doc.id).delete()
                .then(() => {
                    db.collection('Users').doc(auth.currentUser.uid).get().then((doc) => {
                        if (doc.exists) {
                            const data = doc.data();

                            db.collection('Users').doc(auth.currentUser.uid).update({
                                novacoins: data.novacoins + parseInt(novacoins)
                            })
                            .then(() => {
                                location.reload();
                            })
                            .catch((error) => {
                                console.error('Error updating novacoins', error);
                                alert('Unable to sell item. Please try again later.');
                            });
                        }
                    })
                    .catch((error) => {
                        console.error('Error retrieving user document', error);
                        alert('Unable to sell item. Please try again later.');
                    });
                })
                .catch((error) => {
                    console.error('Error deleting redeemed item', error);
                    alert('Unable to sell item. Please try again later.');
                });
            } else {
                alert('No such item to sell.');
            }
        })
        .catch((error) => {
            console.error('Error querying redeemed items', error);
            alert('Unable to sell item. Please try again later.');
        });
    }
}


function redeem(name, novacoins) {
    db.collection('Users').doc(auth.currentUser.uid).get()
        .then((doc) => {
            if (doc.exists) {
                const data = doc.data();

                if (data.novacoins >= parseInt(novacoins)) {
                    // redeem
                    db.collection('Users').doc(auth.currentUser.uid).update({
                        novacoins: data.novacoins - parseInt(novacoins)
                    })
                    document.getElementById('user-novacoins').innerHTML = `$${data.novacoins - parseInt(novacoins)}`;

                    db.collection('Users').doc(auth.currentUser.uid).collection('Redeemed_Items').add({
                        item: name,
                        novacoins: parseInt(novacoins),
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

            userRef.get()
                .then((doc) => {
                    if (doc.exists) {
                        const data = doc.data();

                        document.getElementById('user-profile-img').src = data.profileIMG == "" ? '/assets/img/default_user.jpeg' : data.profileIMG
                        document.getElementById('user-novacoins').innerText = `$${data.novacoins}`
                    }
                })

            userRef.collection('Redeemed_Items').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();

                        // const div = document.createElement('div');
                        // div.className = 'max-w-sm bg-white border border-gray-200 rounded-lg shadow-md';

                        // const img = document.createElement('img');
                        // img.className = 'rounded-t-lg';
                        // img.src = `/assets/img/rewards/${data.item.toLowerCase().replace(/ /g, '_')}.png`;
                        // div.appendChild(img);

                        // const divInner = document.createElement('div');
                        // divInner.className = 'p-4';
                        // div.appendChild(divInner);

                        // const h5 = document.createElement('h5');
                        // h5.className = 'mb-2 text-xl font-bold tracking-tight text-gray-900';
                        // h5.textContent = data.item;
                        // divInner.appendChild(h5);

                        // const p = document.createElement('p');
                        // p.className = 'text-gray-600';
                        // p.textContent = `Novacoins: ${data.novacoins}`;
                        // divInner.appendChild(p);

                        // const button = document.createElement('Sell');
                        // button.className = 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-10';
                        // button.style.textDecoration = 'none';
                        // button.style.cursor = 'pointer';
                        // button.dataset.name = data.item;
                        // button.dataset.redeem = data.novacoins;
                        // button.onclick = function() {
                        //     sell(data.item, data.novacoins);
                        // };
                        // button.textContent = 'Sell';
                        // divInner.appendChild(button);

                        const div = document.createElement('div');
                        div.className = 'bg-[#2B2B2B] p-4 rounded-md';

                        const img = document.createElement('img');
                        img.src = `/assets/img/rewards/${data.item.toLowerCase().replace(/ /g, '_')}.png`;
                        img.className = 'mb-2 rounded-md bg-white';
                        img.alt = data.item;
                        div.appendChild(img);

                        const h3 = document.createElement('h3');
                        h3.className = 'text-lg font-bold';
                        h3.textContent = data.item;
                        div.appendChild(h3);

                        const p = document.createElement('p');
                        p.className = 'text-sm text-gray-300';
                        p.textContent = `Novacoins: ${data.novacoins}`;
                        div.appendChild(p);

                        const button = document.createElement('button');
                        button.className = 'bg-red-600 text-sm px-3 py-1 mt-3 rounded-md hover:bg-red-700 duration-300';
                        button.textContent = 'Sell';
                        button.dataset.name = data.item;
                        button.dataset.redeem = data.novacoins;
                        button.onclick = function() {
                            sell(data.item, data.novacoins);
                        };
                        button.textContent = 'Sell';
                        div.appendChild(button);

                        document.getElementById('myrewards-items').appendChild(div);
                    })
                })
        } else {
            window.location.href = '/signin.html';
        }
    });
});