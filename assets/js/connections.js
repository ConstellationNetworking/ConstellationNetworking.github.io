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

                    // load "my connections"
                    const connectionsArray = data.connections;
                    console.log(connectionsArray);

                    if (connectionsArray && connectionsArray.length > 0) {
                        connectionsArray.forEach(connection => {
                            db.collection('Users').doc(connection).get().then((doc) => {
                                if (doc.exists) {
                                    const data = doc.data();

                                    const card = document.createElement('div');
                                    card.className = 'bg-gray-800 px-4 py-2 rounded-lg flex items-center relative select-none cursor-pointer hover:bg-gray-600 duration-200';
                                    
                                    const level = document.createElement('p');
                                    level.className = 'absolute top-2 right-3 mt-2 mr-2 text-sm text-gray-400';
                                    level.textContent = `Level: ${data.level}`;

                                    const button = document.createElement('button');
                                    button.className = 'bg-blue-600 text-sm absolute bottom-4 right-3 mt-2 mr-2 px-4 py-2 rounded-md hover:bg-blue-700 duration-300';
                                    button.textContent = 'Chat';
                                    button.onclick = function() {
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

                                    document.getElementById('myconnections').appendChild(card);
                                }
                            })
                        });
                    }
                }
            })
        } else {
            window.location.href = '/signin.html';
        }
    })
});

// document.addEventListener("DOMContentLoaded", function() {
//     const bioElement = document.getElementById("user-bio");
//     const bioText = bioElement.textContent;
//     if (bioText.length > 50) {
//         bioElement.textContent = bioText.substring(0, 150) + "...";
//     }
// });