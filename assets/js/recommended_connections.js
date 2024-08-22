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

function displayUserCard(data, containerID) {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 px-4 py-2 rounded-lg flex items-center relative select-none cursor-pointer hover:bg-gray-600 duration-200';

    const level = document.createElement('p');
    level.className = 'absolute top-2 right-3 mt-2 mr-2 text-sm text-gray-400';
    level.textContent = `Level: ${data.level}`;

    const button = document.createElement('button');
    button.className = 'bg-blue-600 text-sm absolute bottom-4 right-3 mt-2 mr-2 px-4 py-2 rounded-md hover:bg-blue-700 duration-300';
    button.textContent = 'Chat';
    button.onclick = function () {
        window.location.href = `/chat.html?userID=${connection}`;
    }

    const img = document.createElement('img');
    img.src = data.profileIMG == "" ? '/assets/img/default_user.jpeg' : data.profileIMG;
    img.className = 'my-1 ml-1 rounded-md';
    img.style.width = '75';
    img.style.height = '75';
    img.style.borderRadius = '100%';

    const div = document.createElement('div');
    div.className = 'ml-4';

    const h3 = document.createElement('h3');
    h3.className = 'text-lg font-bold';
    h3.textContent = data.name;

    const p = document.createElement('p');
    p.className = 'text-sm truncate overflow-ellipsis overflow-hidden'
    p.id = 'user-bio';
    p.textContent = data.bio;

    div.appendChild(h3);
    div.appendChild(p);

    card.appendChild(level);
    card.appendChild(button);
    card.appendChild(img);
    card.appendChild(div);

    document.getElementById(containerID).appendChild(card);
}

document.addEventListener('DOMContentLoaded', function () {
    auth.onAuthStateChanged(function (user) {
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

                    // load "recommended connections"
                    db.collection("Users").get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (doc.exists) {
                                const data = doc.data();

                                displayUserCard(data, 'recommendedconnections');
                            }
                        });
                    });
                }
            })
        } else {
            window.location.href = '/signin.html';
        }
    })

    const searchInput = document.getElementById('searchbox');
    searchInput.addEventListener('input', debounce(function () {
        const query = searchInput.value.trim();
        const searchResultsSection = document.getElementById('section:search-results');

        if (query) {
            searchResultsSection.style.display = 'block';
            searchUsers(query);
        } else {
            searchResultsSection.style.display = 'none';
        }
    }, 500));
});

// MARK: - Search Function
function debounce(func, delay) {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
}

function searchUsers(query) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';

    // Split query into parts (first name, last name)
    const nameParts = query.trim().split(/\s+/);

    const queries = [];

    // Add combinations of name parts
    if (nameParts.length === 1) {
        // Single name part
        const name = nameParts[0];
        queries.push(
            db.collection('Users').where('name', '>=', name.toLowerCase()).where('name', '<=', name.toLowerCase() + '\uf8ff'),
            db.collection('Users').where('name', '>=', name.toUpperCase()).where('name', '<=', name.toUpperCase() + '\uf8ff'),
            db.collection('Users').where('name', '>=', capitalize(name)).where('name', '<=', capitalize(name) + '\uf8ff')
        );
    } else {
        // Multiple name parts
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ');

        queries.push(
            db.collection('Users').where('name', '>=', query.toLowerCase()).where('name', '<=', query.toLowerCase() + '\uf8ff'),
            db.collection('Users').where('name', '>=', query.toUpperCase()).where('name', '<=', query.toUpperCase() + '\uf8ff'),
            db.collection('Users').where('name', '>=', capitalize(query)).where('name', '<=', capitalize(query) + '\uf8ff'),

            db.collection('Users').where('name', '>=', firstName.toLowerCase() + ' ' + lastName.toLowerCase()).where('name', '<=', firstName.toLowerCase() + ' ' + lastName.toLowerCase() + '\uf8ff'),
            db.collection('Users').where('name', '>=', lastName.toLowerCase() + ' ' + firstName.toLowerCase()).where('name', '<=', lastName.toLowerCase() + ' ' + firstName.toLowerCase() + '\uf8ff'),

            db.collection('Users').where('name', '>=', firstName.toUpperCase() + ' ' + lastName.toUpperCase()).where('name', '<=', firstName.toUpperCase() + ' ' + lastName.toUpperCase() + '\uf8ff'),
            db.collection('Users').where('name', '>=', lastName.toUpperCase() + ' ' + firstName.toUpperCase()).where('name', '<=', lastName.toUpperCase() + ' ' + firstName.toUpperCase() + '\uf8ff'),

            db.collection('Users').where('name', '>=', capitalize(firstName) + ' ' + capitalize(lastName)).where('name', '<=', capitalize(firstName) + ' ' + capitalize(lastName) + '\uf8ff'),
            db.collection('Users').where('name', '>=', capitalize(lastName) + ' ' + capitalize(firstName)).where('name', '<=', capitalize(lastName) + ' ' + capitalize(firstName) + '\uf8ff')
        );
    }

    // Search by email and senderId
    queries.push(
        db.collection('Users').where('email', '==', query),
        db.collection('Users').where('senderId', '==', query)
    );

    // Execute all queries
    queries.forEach(query => {
        query.get().then(snapshot => {
            snapshot.forEach(doc => {
                displayUserCard(doc.data(), 'search-results');
            });
        });
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
