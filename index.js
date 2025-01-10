try {
    let db = firebase.firestore();
    let auth = firebase.auth();
} catch {
    console.error('[ERROR] Unable to load firebase db & auth.');
} 