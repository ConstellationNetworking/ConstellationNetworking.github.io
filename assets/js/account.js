let userHistory = [];

document.addEventListener('DOMContentLoaded', function () {
    const auth = firebase.auth();
    const db = firebase.firestore();
    var dropdown = document.querySelector('.dropdown');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('click', function (event) {
        var isMenuOpen = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isMenuOpen ? 'none' : 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', function () {
        dropdownMenu.style.display = 'none';
    });

    // update current user's panel
    function updateCurrentUser() {
        const auth = firebase.auth();
        const db = firebase.firestore();

        auth.onAuthStateChanged(function (user) {
            db.collection('Users').doc(auth.currentUser.uid).get()
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();

                        const profilePictureImage = document.getElementById('current-user-profile-picture');
                        profilePictureImage.src = data.profileIMG  == "" ? "https://placehold.co/100x100" : userDoc.profileIMG;

                        const currentUserName = document.getElementById('current-user-name');
                        currentUserName.textContent = data.name;

                        const currentUserLevel = document.getElementById('current-user-level');
                        currentUserLevel.textContent = `Lvl. ${data.level}`;

                        const currentUserPoints = document.getElementById('current-user-points');
                        currentUserPoints.textContent = `Pts. ${data.points}`;
                    }
                })
        })
    }
    updateCurrentUser();

    // update userHistoryList
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // console.log('User signed in:', user);

            const userRef = db.collection('Users').doc(user.uid);

            userRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    userHistory = data.userHistory;

                    // add each user to the messages pane
                    for (const [userID, name] of Object.entries(data.userHistory)) {
                        const existinguserListElement = document.getElementById(`chat-user-${userID}`);

                        if (!existinguserListElement) {
                            db.collection('Users').where('senderId', '==', userID).get()
                                .then(snapshot => {
                                    if (!snapshot.empty) {
                                        const userDoc = snapshot.docs[0].data();
                                        const userBox = document.createElement('div');
                                        userBox.id = `chat-user-${userID}`;
                                        userBox.className = 'user-box border-2 border-dashed rounded-lg p-4 flex justify-between items-center mb-4 cursor-pointer';
                                        userBox.setAttribute('onclick', `clickedChat(this)`);
                                        const userProgressLevel = userDoc.level // 100;

                                        const userInfo = `
                            <div class="flex items-center" id="user-${userID}">
                                <img src="${userDoc.profileIMG}" width="75" height="75" alt="${userDoc.name}'s avatar" class="rounded-full mr-4">
                                <div>
                                    <div class="font-bold">${userDoc.name}</div>
                                    <div id="chat-user-level" style="font-weight: lighter;">Lvl. ${userDoc.level}</div>
                                    <div style="font-weight: lighter;">Pts. ${userDoc.points}</div>
                                </div>
                            </div>
                            <div class="relative">
                                <svg class="progress-ring" width="40" height="40">
                                    <circle class="progress-ring__circle" stroke="green" stroke-width="4" fill="transparent" r="16" cx="20" cy="20" id="progress-circle-${userID}"/>
                                </svg>
                                <span class="absolute inset-0 flex justify-center items-center font-bold text-sm progress-ring__percentage" style="font-size: 0.65rem;" id="progress-text-${userID}">${userProgressLevel}%</span>
                            </div>
                        `;

                                        userBox.innerHTML = userInfo;
                                        userHistoryList.appendChild(userBox);

                                        updateProgress(userID, userProgressLevel / 10);
                                    } else {
                                        // no user found
                                        console.log('No user found with that userID.')
                                    }
                                })
                                .catch(error => {
                                    console.log('Error getting user:', error);
                                });
                        }
                    }
                }
            })
        }
    })
});

function updateProgress(userid, progress) {
    const db = firebase.firestore();

    progress = Math.min(Math.max(progress, 0), 1);

    const circle = document.getElementById(`progress-circle-${userid}`);
    const percentageText = document.getElementById(`progress-text-${userid}`);

    const currentProgress = parseInt(percentageText.textContent.replace('%', ''), 10) / 100;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.setProperty('--circumference', circumference);
    const finalOffset = circumference - progress * circumference;
    circle.style.setProperty('--final-offset', finalOffset);
    circle.style.setProperty('--initial-offset', circumference);

    setTimeout(() => {
        circle.style.strokeDashoffset = finalOffset;
    });

    const percentage = Math.round(progress * 100);
    percentageText.textContent = `${percentage}%`;

    // update to firebase
    const updateProgressRef = db.collection("Users").doc(userid);
    updateProgressRef.update({
        level: percentage / 10
    })
        .then(() => {
            // console.log("Document successfully updated!");
        })
        .catch(error => {
            updateProgress(userid, currentProgress - progress);
            console.log(error);
        })

    // update text
    const levelText = document.getElementById('chat-user-level');
    levelText.textContent = `Lvl. ${percentage / 10}`;

    return currentProgress;
}

function getProgress(userid) {
    const percentageText = document.getElementById(`progress-text-${userid}`);
    const currentProgress = parseInt(percentageText.textContent.replace('%', ''), 10) / 100;

    return currentProgress
}

function addWidget() {
    console.log('Add widget button clicked!');
    updateProgress('jerry', getProgress('jerry') - 0.1);
}

function clickedChat(element) {
    let userid = element.id.replace('chat-user-', '');
    updateProgress(userid, getProgress(userid) + 0.1);
}

// sign out
function signout() {
    const auth = firebase.auth();
    const db = firebase.firestore();

    auth.signOut()
        .then(() => {
            console.log('User signed out successfully');
            window.location.href = '/index.html';
        })
        .catch((error) => {
            console.log('Sign-out error:', error);
            alert('An error occurred. Please try again.')
        });
}