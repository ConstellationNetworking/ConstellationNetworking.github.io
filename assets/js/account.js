let userHistory = [];
const db = firebase.firestore();
const auth = firebase.auth();

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
        const auth = firebase.auth();
        const db = firebase.firestore();

        auth.onAuthStateChanged(function (user) {
            db.collection('Users').doc(auth.currentUser.uid).get()
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();

                        const profilePictureImage = document.getElementById('current-user-profile-picture');
                        profilePictureImage.src = data.profileIMG == "" ? "/assets/img/default_user.jpeg" : data.profileIMG;

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
                                <img src="${userDoc.profileIMG == "" ? "/assets/img/default_user.jpeg" : userDoc.profileIMG}" width="75" height="75" alt="${userDoc.name}'s avatar" class="rounded-full mr-4">
                                <div>
                                    <div class="font-bold">${userDoc.name}</div>
                                    <div id="chat-user-level-${userID}" style="font-weight: lighter;">Lvl. ${userDoc.level}</div>
                                    <div id="chat-user-points-${userID}" style="font-weight: lighter;">Pts. ${userDoc.points}</div>
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
        } else {
            window.location.href = '/signin.html';
        }

        loadTasks();
    })
});

function updateProgress(userid, progress) {
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
    updateProgressRef.get().then((doc) => {
        if (doc.exists) {
            updateProgressRef.update({
                level: percentage / 10,
                points: doc.data().points += 1000
            })
                .then(() => {
                    // console.log("Document successfully updated!");
                })
                .catch(error => {
                    updateProgress(userid, currentProgress - progress);
                    console.log(error);
                })

            // update text
            const levelText = document.getElementById('chat-user-level-' + userid);
            levelText.textContent = `Lvl. ${percentage / 10}`;
            const pointsText = document.getElementById('chat-user-points-' + userid);
            pointsText.textContent = `Pts. ${doc.data().points += 1000}`;
        }
    })

    return currentProgress;
}

function getProgress(userid) {
    const percentageText = document.getElementById(`progress-text-${userid}`);
    const currentProgress = parseInt(percentageText.textContent.replace('%', ''), 10) / 100;

    return currentProgress
}

function addWidget() {

}

function clickedChat(element) {
    let userid = element.id.replace('chat-user-', '');
    updateProgress(userid, getProgress(userid) + 0.1);
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

function addTask() {
    var inputValue = document.getElementById('newTask').value;

    if (inputValue.trim() != '') {
        db.collection('Users').doc(auth.currentUser.uid).collection('Tasks').add({
            task: inputValue,
            completed: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
            .then(() => {
                console.log('Task added successfully');
                document.getElementById('newTask').value = '';
                loadTasks();
            })
            .catch((error) => {
                console.error(error);
            })
    } else {
        alert('Please enter a task.');
    }
}

function loadTasks() {
    db.collection('Users').doc(auth.currentUser.uid).collection('Tasks').onSnapshot((querySnapshot) => {
        var tasks = '';
        var totalTasks = 0;
        var completedTasks = 0;

        querySnapshot.forEach((doc) => {
            totalTasks++; // Increment total tasks count
            if (doc.data().completed) {
                completedTasks++; // Increment completed tasks count
            }

            tasks += `<li>
                <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 5px;">
                    <div>
                        <input type="checkbox" ${doc.data().completed ? 'checked' : ''} 
                               onchange="updateTaskStatus('${doc.id}', this.checked)" class="form-check-input">
                        ${doc.data().task}
                    </div>
                    <button onclick="deleteTask('${doc.id}', '${doc.data().task}')" style="width: 25px; height: 25px; background-color: red; border-radius: 5px; display: flex; justify-content: center; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                  </svg>
                    </button>
                </div>
            </li>`;
        });

        document.getElementById('taskList').innerHTML = tasks;

        // Update the task-completed button text
        document.getElementById('task-completed').textContent = `${completedTasks}/${totalTasks}`;
    });
}


function updateTaskStatus(taskId, isCompleted) {
    db.collection('Users').doc(auth.currentUser.uid).collection('Tasks').doc(taskId).update({
        completed: isCompleted
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
}

function deleteTask(taskId, task) {
    if (confirm(`Are you sure you want to delete "${task}"?`)) {
        db.collection("Users").doc(auth.currentUser.uid).collection('Tasks').doc(taskId).delete()
            .then(() => {
                console.log("Document successfully deleted!");
                loadTasks(); // Refresh the task list
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
    }
}

// task <Enter> bind
document.getElementById('newTask').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        addTask();
    }
});

function clearAllTasks() {
    if (confirm('Delete all tasks?')) {
        db.collection("Users").doc(auth.currentUser.uid).collection('Tasks').get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    doc.ref.delete();
                });
                console.log("All tasks deleted.");
            })
            .catch((error) => {
                console.error("Error deleting tasks: ", error);
            });
    }
}