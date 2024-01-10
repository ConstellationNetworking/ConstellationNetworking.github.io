let db = firebase.firestore();

export function newAccountInit(user) {
    // tasks init
    db.collection('Users').doc(user.uid).collection('Tasks').add({
        task: "Create a new task by typing it above.",
        completed: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(() => { })
        .catch((error) => {
            console.error(error);
        })

    // missions init
    let missionID = generateUniqueId();
    let missionRef = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID);
    let cardClasses = ['blue', 'green', 'yellow']

    missionRef.set({
        title: 'Welcome to your first mission!',
        description: 'Creating your own unique presence through your person is the first step to building your network.',
        completed: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        members: [user.uid],
        tasks: {'Edit your avatar.': false, 'Visit your missions page to see your missions.': false},
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
    let missionRef2 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID2);

    setTimeout(() => {
        missionRef2.set({
            title: 'Creating a todo',
            description: 'Head over to your account and create a todo.',
            completed: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            members: [user.uid],
            tasks: {'Visit your account page to see your tasks.': false},
            progress: 0,
            type: 'Get started',
            missionID: missionID2,
            cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)]
        })
        .then(() => {
            // if (redirectURL != null) { window.location = redirectURL; } else { window.location = '/index.html'; }
            window.location = '/setup_profile.html'
        })
        .catch((error) => {
            console.error(error);
        })
    }, 1500);
}

function generateUniqueId() {
    let id = Date.now().toString(36);
    for(let i = 0; i < 5; i++) {
        id += Math.random().toString(36).substr(2, 9);
    }
    return id;
}