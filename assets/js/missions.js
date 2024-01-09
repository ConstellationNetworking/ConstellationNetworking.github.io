let db = firebase.firestore();
let auth = firebase.auth();

document.addEventListener("DOMContentLoaded", function () {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            db.collection('Users').doc(auth.currentUser.uid).get()
                .then((doc) => {
                    if (doc.exists) {
                        const data = doc.data();

                        document.getElementById('currentUser-name').innerHTML = data.name;
                        document.getElementById('currentUser-email').innerHTML = data.email;
                        document.getElementById('currentUser-profile-picture').src = data.profileIMG == "" ? '/assets/img/default_user.jpeg' : data.profileIMG
                        document.getElementById('currentUser-profile-picture').alt = `Profile picture of ${data.name}`;
                    }
                })

            db.collection('Users').doc(auth.currentUser.uid).collection('Missions').orderBy('createdAt', 'desc').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const mission = doc.data();
                    displayMissions(mission);
                })
            })
        }
    });
});

function displayMissions(mission) {
    const missionsContainer = document.getElementById('missions-container');

    const missionCard = document.createElement('div');
    missionCard.className = `bg-${mission.cardColour}-100 p-4 rounded-lg`;
    missionCard.onclick = () => { openMission(mission.missionID, mission) };
    missionCard.style.textAlign = 'left';
    missionCard.id = mission.missionID;
    missionCard.innerHTML = `
        <img src="https://placehold.co/300x150" alt="${mission.title}" class="rounded-lg mb-3">
        <div class="flex justify-between items-center mb-2">
            <div class="text-sm font-medium text-blue-800">${mission.type} • ${mission.completed ? 'Completed' : 'Incomplete'}</div>
        </div>
        <h3 class="text-lg font-semibold mb-1">${mission.title}</h3>
        <div class="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${mission.progress}%"></div>
        </div>
    `;

    missionsContainer.appendChild(missionCard);
}

function openMission(missionID, mission) {
    const missionCard = document.getElementById(missionID);
    missionCard.style.display = 'flex';
    missionCard.style.flexDirection = 'column';
    missionCard.style.alignItems = 'flex-start';

    const tasksList = mission.tasks.map(task => `
        <li>
            <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 5px;">
                <div>
                    <input type="checkbox" class="form-check-input" disabled>
                    ${task}
                </div>
            </div>
        </li>
    `).join('');

    missionCard.innerHTML = `
        <img src="https://placehold.co/300x150" alt="${mission.title}" class="rounded-lg mb-3">
        <div class="flex justify-between items-center mb-2">
            <div class="text-sm font-medium text-blue-800">${mission.type} • ${mission.completed ? 'Completed' : 'Incomplete'}</div>
        </div>
        <h3 class="text-lg font-semibold mb-1">${mission.title}</h3>
        <div class="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${mission.progress}%"></div>
        </div>
        <p style="padding-top: 20px;">${mission.description}</p>

        <div>
            <h4 style="padding-top: 20px; font-weight: bold;">Tasks:</h4>
            <ul id="taskList" style="list-style-type: none; padding: 10px">${tasksList}</ul>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <button type="button" onclick="toggleMissionCompletion('${mission.missionID}')" class="btn btn-outline-primary">${mission.completed ? 'Mark as incomplete' : 'Mark as complete'}</button>
            <button style="margin-left: 5;" type="button" class="btn btn-outline-danger" onclick="deleteMission('${mission.missionID}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="black" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
            </button>
        </div>
        `
}

function toggleMissionCompletion(missionID) {
    db.collection('Users').doc(auth.currentUser.uid).collection('Missions').doc(missionID).get()
        .then(doc => {
            const mission = doc.data();
            const newCompletionStatus = !mission.completed;

            return db.collection('Users').doc(auth.currentUser.uid).collection('Missions').doc(missionID).update({
                completed: newCompletionStatus,
                progress: newCompletionStatus ? 100 : 0
            })
        })
        .then(() => {
            fetchMissions().then(renderMission);
        })
        .catch(error => {
            console.error('Error updating mission: ', error);
        })
}

function fetchMissions() {
    return db.collection('Users').doc(auth.currentUser.uid).collection('Missions').get()
        .then(querySnapshot => {
            const missions = [];
            querySnapshot.forEach(doc => {
                missions.push(doc.data());
            });
            return missions;
        })
        .catch(error => {
            console.error('Error fetching missions: ', error);
        })
}

function renderMission(missions) {
    const missionsContainer = document.getElementById('missions-container');
    missionsContainer.innerHTML = '';

    missions.forEach(mission => {
        const missionCard = document.createElement('div');
        missionCard.className = `bg-${mission.cardColour}-100 p-4 rounded-lg`;
        missionCard.onclick = () => { openMission(mission.missionID, mission) };
        missionCard.style.textAlign = 'left';
        missionCard.id = mission.missionID;
        missionCard.innerHTML = `
        <img src="https://placehold.co/300x150" alt="${mission.title}" class="rounded-lg mb-3">
        <div class="flex justify-between items-center mb-2">
            <div class="text-sm font-medium text-blue-800">${mission.type} • ${mission.completed ? 'Completed' : 'Incomplete'}</div>
        </div>
        <h3 class="text-lg font-semibold mb-1">${mission.title}</h3>
        <div class="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${mission.progress}%"></div>
        </div>
    `;

        missionsContainer.appendChild(missionCard);
    })
}

function deleteMission(missionID) {
    if (confirm('Are you sure you want to delete this mission?')) {
        db.collection('Users').doc(auth.currentUser.uid).collection('Missions').doc(missionID).delete()
            .then(() => {
                fetchMissions().then(renderMission);
            })
            .catch(error => {
                console.error('Error deleting mission: ', error);
            })
    }
}

function resetMission() {
    let missionID = generateUniqueId();
    let missionRef = firebase.firestore().collection('Users').doc(auth.currentUser.uid).collection('Missions').doc(missionID);
    cardClasses = ['blue', 'green', 'yellow']

    missionRef.set({
        title: 'Welcome to your first mission!',
        description: 'This is a sample mission. You can edit it or delete it.',
        completed: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        members: [auth.currentUser.uid],
        tasks: ['Visit your account page to see your tasks.', 'Visit your missions page to see your missions.'],
        progress: 0,
        type: 'Get started',
        missionID: missionID,
        cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)]
    })
        .then(() => { })
        .catch((error) => {
            console.error(error);
        })

    let missionID2 = generateUniqueId();
    let missionRef2 = firebase.firestore().collection('Users').doc(auth.currentUser.uid).collection('Missions').doc(missionID2);

    missionRef2.set({
        title: 'Creating a todo',
        description: 'Head over to your account and create a todo.',
        completed: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        members: [auth.currentUser.uid],
        tasks: ['Visit your account page to see your tasks.'],
        progress: 0,
        type: 'Get started',
        missionID: missionID2,
        cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)]
    })
        .then(() => {
            fetchMissions().then(renderMission);
        })
        .catch((error) => {
            console.error(error);
        })
}

function generateUniqueId() {
    let id = Date.now().toString(36);
    for(let i = 0; i < 5; i++) {
        id += Math.random().toString(36).substr(2, 9);
    }
    return id;
}