var url = new URL(window.location.href);
var searchParams = new URLSearchParams(url.search);
var redirectURL = searchParams.get('redirect');

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
                })
        } else {
            alert('Please enter a valid email address.');
            console.error('Email address not valid.')
        }
    }
}


function login() {
    const emailForm = document.getElementById('login-email').value;
    const passwordForm = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(emailForm, passwordForm)
        .then((userCredential) => {
            console.log('Login successful:', userCredential.user);
            
            // redirect to accounts page or perform other actions
            if (redirectURL != null) { window.location = redirectURL; } else { window.location = '/index.html'; }
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                alert('No user found associated with this email. Please check your email address or create a new account.');
                console.error('No user found with this email.');
            } else if (error.code === 'auth/wrong-password') {
                alert('Incorrect password. Please try again.');
            } else {
                alert(error);
                console.error(error);
            }
        })
}

function signup() {
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

                    const userDocRef = firebase.firestore().collection('Users').doc(user.uid);
                    userDocRef.set({
                        name: nameForm,
                        email: emailForm,
                        password: passwordForm,
                        senderId: user.uid,
                        profileIMG: '',
                        userHistory: {},
                        level: 0,
                        points: 0
                    })
                        .then(() => {
                            user.sendEmailVerification()
                                .then(() => {
                                    alert('An verification link has been sent to your email. Please check your inbox to verify your account.');
                                    console.log(`Verification email sent to ${emailForm}`)

                                    firebase.firestore().collection('Users').doc(user.uid).collection('Tasks').add({
                                        task: "Create a new task by typing it above.",
                                        completed: false,
                                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                                    })
                                        .then(() => { })
                                        .catch((error) => {
                                            console.error(error);
                                        })

                                    // if (redirectURL != null) { window.location = redirectURL; } else { window.location = '/index.html'; }
                                    window.location = '/setup_profile.html'
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
            } else if (error.code === 'auth/invalid-email') {
                alert('Please enter a valid email address.');
                console.error('Email address not valid.')
            } else {
                alert(error);
                console.error(error);
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