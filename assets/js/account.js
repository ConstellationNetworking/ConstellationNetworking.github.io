let userHistory = [];
const db = firebase.firestore();
const auth = firebase.auth();

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const action = getUrlParam('action');
if (action == "setupProfile") {
    alert('Finish setting up your avatar now!');
}

document.addEventListener('DOMContentLoaded', function () {
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
        auth.onAuthStateChanged(function (user) {
            db.collection('Users').doc(auth.currentUser.uid).get()
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();

                        const profilePictureImage = document.getElementById('current-user-profile-picture');
                        profilePictureImage.src = data.profileIMG == "" ? "/assets/img/default_user.jpeg" : data.profileIMG;

                        const profilepic = document.getElementById('profile-pic');
                        profilepic.src = data.profileIMG == "" ? "/assets/img/default_user.jpeg" : data.profileIMG;

                        const currentUserName = document.getElementById('current-user-name');
                        currentUserName.textContent = data.name;

                        const currentUserEmail = document.getElementById('current-user-email');
                        currentUserEmail.textContent = data.email;

                        const currentUserLevel = document.getElementById('current-user-level');
                        currentUserLevel.textContent = `Level ${data.level}`;

                        const currentUserPoints = document.getElementById('current-user-points');
                        currentUserPoints.textContent = `$${data.novacoins} Novacoins`;

                        // avatar
                        head = doc.data().avatar.head;
                        hair = doc.data().avatar.hair;
                        glasses = doc.data().avatar.glasses;
                        const headElement = document.getElementById('head');
                        const hairElement = document.getElementById('hair');
                        const glassesElement = document.getElementById('glasses');
                        if (head == null) {
                            headElement.style.display = 'none';
                        } else {
                            headElement.style.display = 'block';
                            headElement.src = `/assets/img/create_avatar/${head}.png`;
                        }
                        if (hair == null) {
                            hairElement.style.display = 'none';
                        } else {
                            hairElement.style.display = 'block';
                            hairElement.src = `/assets/img/create_avatar/${hair}.png`;
                        }

                        // TODO: MARK:- Sometimes will add a image not found error
                        // Solution 1: if user did not choose a glasses design, set glasses to database as "null" and create a transparent image named "null.png" (easier implementation)
                        // Solution 2: if user did not choose a glasses design, add a if statement to check if glasses in database if null. If null: skip glasses image line; else add glasses image line
                        if (glasses == null) {
                            glassesElement.style.display = 'none';
                        } else {
                            glassesElement.style.display = 'block';
                            glassesElement.src = `/assets/img/create_avatar/${glasses}.png`;
                        }

                        // Trim avatar into a circle
                        headElement.style.borderRadius = '50%';
                        hairElement.style.borderRadius = '50%';

                        // auto rotate avatar
                        if (Math.random() < 0.99) {
                            setTimeout(() => {
                                document.querySelector('.flip-container').classList.toggle('flip');

                                setTimeout(() => {
                                    document.querySelector('.flip-container').classList.toggle('flip');
                                }, 1500);
                            }, 1000);
                        }

                        if (Math.random() < 0.45 && data.completedAccountFeedbackForm === false) {
                            document.getElementById('main-iframe').src = '/feedback.html';
                            alert('Fill out a quick survey and get 10 novacoins!')
                        }
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
            const lastActive = new Date(); // Current timestamp
            userRef.set({
                lastActive: lastActive
            }, { merge: true });

            userRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    userHistory = data.userHistory;

                    // add each user to the messages pane
                    for (const [action, name] of Object.entries(data.userHistory)) {
                        const existinguserListElement = document.getElementById(`chat-user-${action}`);

                        if (!existinguserListElement) {
                            db.collection('Users').where('senderId', '==', action).get()
                                .then(snapshot => {
                                    if (!snapshot.empty) {
                                        const userDoc = snapshot.docs[0].data();
                                        const userBox = document.createElement('div');
                                        userBox.id = `chat-user-${action}`;
                                        userBox.onclick = function () {
                                            window.location = `/chat.html?action=${action}`;
                                        }

                                        const userInfo = `                                        
                                        <div class="flex items-center space-x-4">
                                            <img class="w-12 h-12 rounded-full" src="${userDoc.profileIMG == "" ? "/assets/img/default_user.jpeg" : userDoc.profileIMG} alt="${userDoc.name}'s profile image."
                                            <div>
                                                <div>
                                                    <p class="text-sm">${userDoc.name}</p>
                                                    <p class="text-[#9CA3AF] text-xs">${userDoc.email}</p>
                                                </div>
                                            </div>
                                        </div>`;


                                        userBox.innerHTML = userInfo;
                                        userHistoryList.appendChild(userBox);

                                        // updateProgress(action, userProgressLevel / 10); // MARK:- Automatically adds lvl and pts to other users in current user's userHistory, can be removed/polished later.
                                    } else {
                                        // no user found
                                        console.error('No user found in userHistory')
                                    }
                                })
                                .catch(error => {
                                    console.error('Error getting user:', error);
                                });
                        }
                    }
                }
            })
        } else {
            window.location.href = '/signin.html';
        }
    })
});

function updateProgress(action, progress) {
    progress = Math.min(Math.max(progress, 0), 1);

    const circle = document.getElementById(`progress-circle-${action}`);
    const percentageText = document.getElementById(`progress-text-${action}`);

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
    const updateProgressRef = db.collection("Users").doc(action);
    updateProgressRef.get().then((doc) => {
        if (doc.exists) {
            updateProgressRef.update({
                level: percentage / 10,
                points: doc.data().points += 1000
            })
                .catch(error => {
                    updateProgress(action, currentProgress - progress);
                    console.log(error);
                })

            // update text
            document.getElementById('chat-user-level-' + action).textContent = `Lvl. ${percentage / 10}`;
            document.getElementById('chat-user-points-' + action).textContent = `Pts. ${doc.data().points += 1000}`;
        }
    })

    return currentProgress;
}

function getProgress(action) {
    const percentageText = document.getElementById(`progress-text-${action}`);
    const currentProgress = parseInt(percentageText.textContent.replace('%', ''), 10) / 100;

    return currentProgress
}

function addWidget() {

}

function clickedChat(element) {
    let action = element.id.replace('chat-user-', '');
    updateProgress(action, getProgress(action) + 0.1);
}

// sign out
function signout() {
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