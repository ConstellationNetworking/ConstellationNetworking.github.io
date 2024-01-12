var firebaseConfig = {
    apiKey: "AIzaSyA66iAwhXocKb_CkWcaYldiThXQNfg_CWg",
    authDomain: "constellation-41c9f.firebaseapp.com",
    projectId: "constellation-41c9f",
    storageBucket: "constellation-41c9f.appspot.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().collection('Statistics').doc('website-views').set({
    views: firebase.firestore.FieldValue.increment(1)
}, { merge: true })