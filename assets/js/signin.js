var url = new URL(window.location.href);
var searchParams = new URLSearchParams(url.search);
var redirectURL = searchParams.get('redirect');
let db = firebase.firestore();

function showLogin() {
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';

    document.querySelector('.card-3d-wrapper').classList.remove('show-register');
}

function showSignup() {
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';

    document.querySelector('.card-3d-wrapper').classList.add('show-register');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function forgotPassword() {
    const emailForm = document.getElementById('login-email').value.trim();
    if (emailForm === '') {
        alert('Please enter your email address first.');
    } else {
        if (validateEmail(emailForm)) {
            firebase.auth().sendPasswordResetEmail(emailForm)
                .then(() => {
                    alert('Password reset email sent.');
                })
                .catch((error) => {
                    alert('Failed to send reset email. Please try again.')
                    console.error(error);
                    document.getElementById('login-btn').innerText = 'Submit';
                })
        } else {
            alert('Please enter a valid email address.');
            console.error('Email address not valid.')
            document.getElementById('login-btn').innerText = 'Submit';
        }
    }
}


function login() {
    document.getElementById('login-btn').innerText = 'Loading...';

    const emailForm = document.getElementById('login-email').value;
    const passwordForm = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(emailForm, passwordForm)
        .then((userCredential) => {
            console.log('Login successful:', userCredential.user);

            // redirect to accounts page or perform other actions
            if (redirectURL != null) { window.location = redirectURL; } else { window.location = '/index.html'; }
        })
        .catch((error) => {
            console.log(error.code)
            if (error.code === 'auth/user-not-found') {
                alert('No user found associated with this email. Please check your email address or create a new account.');
                console.error('No user found with this email.');
                document.getElementById('login-btn').innerText = 'Login';
            } else if (error.code === 'auth/wrong-password' || error.message.includes('INVALID_LOGIN_CREDENTIALS')) {
                alert('Incorrect credencials. Please try again.');
                document.getElementById('login-btn').innerText = 'Login';
            } else {
                alert(error);
                console.error(error);
                document.getElementById('login-btn').innerText = 'Login';
            }
        })
}

function signup() {
    document.getElementById('signup-btn').innerText = 'Loading...';

    const nameForm = document.getElementById('signup-name').value;
    const emailForm = document.getElementById('signup-email').value;
    const passwordForm = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(emailForm, passwordForm)
        .then((userCredencial) => {
            const user = userCredencial.user;
            console.log('Signup successful:', user);
            user.updateProfile({
                displayName: nameForm
            })
                .then(() => {
                    console.log('profile updated', user);

                    const hashedPassword = CryptoJS.MD5(passwordForm).toString();

                    const userDocRef = firebase.firestore().collection('Users').doc(user.uid);
                    userDocRef.set({
                        name: nameForm,
                        email: emailForm,
                        hashed_password: hashedPassword,
                        senderId: user.uid,
                        profileIMG: '',
                        userHistory: {},
                        level: 0,
                        points: 0,
                        lastActive: firebase.firestore.FieldValue.serverTimestamp(),
                        isAdmin: false,
                        bg: 'bg3.jpg',
                        accountCreatedOn: firebase.firestore.FieldValue.serverTimestamp(),
                        novacoins: 0
                    })
                        .then(() => {
                            user.sendEmailVerification()
                                .then(() => {
                                    alert('An verification link has been sent to your email. Please check your inbox to verify your account.');
                                    console.log(`Verification email sent to ${emailForm}`)

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

                                    db.collection('Users').doc(user.uid).collection('Tasks').add({
                                        task: "Checkout your new missions at the missions page!",
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
                                        tokensredeemed: false,
                                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                        members: [user.uid],
                                        tasks: { 'Edit your avatar.': false, 'Visit your missions page to see your missions.': false },
                                        progress: 0,
                                        type: 'Get started',
                                        missionID: missionID,
                                        cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                        novacoins: 10
                                    })
                                        .then(() => {
                                            // next mission
                                            let missionID2 = generateUniqueId();
                                            let missionRef2 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID2);

                                            missionRef2.set({
                                                title: 'Introduction to Cold Introductions',
                                                description: "A cold introduction is the initial contact you make with someone you don't know personally. It's often used in professional settings to connect for career opportunities, business development, or personal growth. The goal is to introduce yourself, show genuine interest, and establish a foundation for further communication. <br><br>Template: <br><br>Hey [Name],<br> Hope you're doing well! I came across your profile/mention of your work in [context/platform] and noticed your interest in [specific interest]. It's something I'm really passionate about too! I'm [Your name], and I [briefly describe what you do or a related interest]. I'd love to connect and chat about [shared interest/topic]. <br><br>Looking forward to hearing from you!",
                                                completed: false,
                                                tokensredeemed: false,
                                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                members: [user.uid],
                                                tasks: { 'Using this template, send a cold introduction with a connection. Make sure to read up on their bio to fill in the tempalte.': false },
                                                progress: 0,
                                                type: 'Building my Constellation',
                                                missionID: missionID2,
                                                cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                                novacoins: 120
                                            })
                                                .then(() => {
                                                    // next mission
                                                    let missionID3 = generateUniqueId();
                                                    let missionRef3 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID3);

                                                    missionRef3.set({
                                                        title: 'Introduction to Warm Introductions',
                                                        description: "A warm introduction is when a mutual contact facilitates the initial connection between you and someone you want to meet. This type of introduction leverages the existing relationship of the mutual contact to establish trust and credibility right from the start. Warm introductions are often more effective than cold introductions because the mutual contact's endorsement adds a level of familiarity and reliability, making the new connection more likely to respond positively and engage in meaningful conversation. <br><br>Template: <br><br>Hi [name],<br> I hope this message finds your well. I am [You name], and I'm a [relationship with mutual contact] with [Mutual's name], whom I noticed is a mutual connection. I thought it would be great for us to connect as we have some common interests in [specific area/industry]. If you're open to it, I'd love to chat more or setup a quick call or meeting to get to know each other better and explore how we might be able to support each other's goals. Look forward to your response!",
                                                        completed: false,
                                                        tokensredeemed: false,
                                                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                        members: [user.uid],
                                                        tasks: { 'Connect with a user that\'s a mutual contact with someone you already know. Send them a warm introduction with that connection.': false },
                                                        progress: 0,
                                                        type: 'Building my Constellation',
                                                        missionID: missionID3,
                                                        cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                                        novacoins: 120
                                                    })
                                                        .then(() => {
                                                            // next mission
                                                            let missionID4 = generateUniqueId();
                                                            let missionRef4 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID4);

                                                            missionRef4.set({
                                                                title: 'Gaining Gravity',
                                                                description: 'Learn how to navigate the platform and amass points.',
                                                                completed: false,
                                                                tokensredeemed: false,
                                                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                                memebrs: [user.uid],
                                                                tasks: { "Gather 500 reputation points (maintain connections, complete missions, sell rewards).": false },
                                                                progress: 0,
                                                                type: "Gaining Connections",
                                                                missionID: missionID4,
                                                                cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                                                novacoins: 110
                                                            })
                                                                .then(() => {
                                                                    // next mission
                                                                    let missionID5 = generateUniqueId();
                                                                    let missionRef5 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID5);

                                                                    missionRef5.set({
                                                                        title: 'Interstellar Investing',
                                                                        description: 'Learn how to navigate the rewards page and customize your avatar.',
                                                                        completed: false,
                                                                        tokensredeemed: false,
                                                                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                                        members: [user.uid],
                                                                        tasks: { 'Redeem your first accessory and/or customization feature in the Rewards page.': false, 'Equip your claimed reward!': false },
                                                                        progress: 0,
                                                                        type: 'Investing',
                                                                        missionID: missionID5,
                                                                        cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                                                        novacoins: 90
                                                                    })
                                                                        .then(() => {
                                                                            // next mission
                                                                            let missionID6 = generateUniqueId();
                                                                            let missionRef6 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID6);

                                                                            missionRef6.set({
                                                                                title: 'Time-Space Trader',
                                                                                description: 'Learn how to sell your rewards and liquidize reputation points.',
                                                                                completed: false,
                                                                                tokensredeemed: false,
                                                                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                                                members: [user.uid],
                                                                                tasks: { 'Sell at least one reward and receive the returned reputation points.': false },
                                                                                progress: 0,
                                                                                type: 'Trading',
                                                                                missionID: missionID6,
                                                                                cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                                                                novacoins: 70
                                                                            })
                                                                                .then(() => {
                                                                                    // next mission
                                                                                    let missionID7 = generateUniqueId();
                                                                                    let missionRef7 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID7);

                                                                                    missionRef7.set({
                                                                                        title: 'Intersecting Orbits',
                                                                                        description: '',
                                                                                        completed: false,
                                                                                        tokensredeemed: false,
                                                                                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                                                        members: [user.uid],
                                                                                        tasks: { 'Send 10 messages to a constellation in one day.': false },
                                                                                        progress: 0,
                                                                                        type: 'Trading',
                                                                                        missionID: missionID7,
                                                                                        cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                                                                        novacoins: 110
                                                                                    })
                                                                                        .then(() => {
                                                                                            // next mission
                                                                                            let missionID8 = generateUniqueId();
                                                                                            let missionRef8 = db.collection('Users').doc(user.uid).collection('Missions').doc(missionID8);

                                                                                            missionRef8.set({
                                                                                                title: 'Comparing Spectra',
                                                                                                description: "View a constellation's bio and use one detail from it to craft a personalized message that sparks a meaningful conversation. <br><br>Template:<br><br>\"I noticed that your bio...\"",
                                                                                                completed: false,
                                                                                                tokensredeemed: false,
                                                                                                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                                                                                members: [user.uid],
                                                                                                tasks: { 'Use the template in a message with a constellation (preferably a new one).': false },
                                                                                                progress: 0,
                                                                                                type: 'Trading',
                                                                                                missionID: missionID8,
                                                                                                cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)],
                                                                                                novacoins: 100
                                                                                            })
                                                                                                .then(() => {
                                                                                                    // next mission
                                                                                                    // MARK:- add mission "Finding your Spectral Classification" from google doc
                                                                                                })
                                                                                                .catch((error) => {
                                                                                                    console.error(error);
                                                                                                })
                                                                                        })
                                                                                        .catch((error) => {
                                                                                            console.error(error);
                                                                                        })
                                                                                })
                                                                                .catch((error) => {
                                                                                    console.error(error);
                                                                                })
                                                                        })
                                                                        .catch((error) => {
                                                                            console.error(error);
                                                                        })
                                                                })
                                                                .catch((error) => {
                                                                    console.error(error);
                                                                })
                                                        })
                                                        .catch((error) => {
                                                            console.error(error);
                                                        })
                                                })
                                                .catch((error) => {
                                                    console.error(error);
                                                })
                                        })
                                        .catch((error) => {
                                            console.error(error);
                                        })

                                    // setTimeout(() => {
                                    //     missionRef2.set({
                                    //         title: 'Creating a todo',
                                    //         description: 'Head over to your account and create a todo.',
                                    //         completed: false,
                                    //         tokensredeemed: false,
                                    //         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                                    //         members: [user.uid],
                                    //         tasks: { 'Create a new todo.': false },
                                    //         progress: 0,
                                    //         type: 'Get started',
                                    //         missionID: missionID2,
                                    //         cardColour: cardClasses[Math.floor(Math.random() * cardClasses.length)]
                                    //     })
                                    //         .then(() => {
                                    //             // if (redirectURL != null) { window.location = redirectURL; } else { window.location = '/index.html'; }
                                    //             window.location = '/setup_profile.html'
                                    //         })
                                    //         .catch((error) => {
                                    //             console.error(error);
                                    //         })
                                    // }, 1500);
                                })
                        })
                        .catch((error) => {
                            console.log('Failed to save user in firestore: ', error)
                        })
                })
                .catch((error) => {
                    console.log('profile update error', error);
                })
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                alert('An account already exists with this email address. Please login or use a different email address.');
                console.error('Account already exists with this email address.')
                document.getElementById('login-btn').innerText = 'Sign up';
            } else if (error.code === 'auth/invalid-email') {
                alert('Please enter a valid email address.');
                console.error('Email address not valid.')
                document.getElementById('login-btn').innerText = 'Sign up';
            } else {
                alert(error);
                console.error(error);
                document.getElementById('login-btn').innerText = 'Sign up';
            }
        })
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-password').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevents the default behavior of the Enter key
            login();
        }
    });

    document.getElementById('signup-password').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevents the default behavior of the Enter key
            signup();
        }
    });
})

function generateUniqueId() {
    let id = Date.now().toString(36);
    for (let i = 0; i < 5; i++) {
        id += Math.random().toString(36).substr(2, 9);
    }
    return id;
}