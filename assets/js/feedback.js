let auth = firebase.auth();
let db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    const bugYesOption = document.getElementById('bugs-issues-yes');
    const bugNoOption = document.getElementById('bugs-issues-no');
    const bugsEncounteredSection = document.getElementById('section:bugs-encountered');

    const toggleBugs = () => {
        if (bugYesOption.checked) {
            bugsEncounteredSection.style.display = 'block';
        } else {
            bugsEncounteredSection.style.display = 'none';
        }
    }

    bugYesOption.addEventListener('change', toggleBugs);
    bugNoOption.addEventListener('change', toggleBugs);

    document.getElementById('form').addEventListener('submit', async (event) => {
        event.preventDefault();
    })
})

function submitFeedback() {
    const bugYesOption = document.getElementById('bugs-issues-yes');
    const bugNoOption = document.getElementById('bugs-issues-no');
    const bugsEncounteredSection = document.getElementById('section:bugs-encountered');

    auth.onAuthStateChanged(function (user) {
        const intuitive = document.querySelector('input[name="intuitive"]:checked')?.nextElementSibling.textContent;
        const mostUsefulPage = document.querySelector('input[name="intuitive"]:checked')?.nextElementSibling.textContent;
        const unnecessaryFeatures = document.getElementById('unnecessary').value.trim();
        const encounteredBugs = document.querySelector('input[name="bugs-issues"]:checked')?.nextElementSibling.textContent;
        const bugs = bugYesOption.checked ? document.getElementById('bugs-encountered').value.trim() : "No bugs encountered.";
        const frequency = document.querySelector('input[name="frequency"]:checked')?.nextElementSibling.textContent;
        const visualDesignRating = document.querySelector('input[name="design"]:checked')?.nextElementSibling.textContent;

        if (!intuitive || !mostUsefulPage || !encounteredBugs || !frequency || !visualDesignRating || unnecessaryFeatures === "") {
            alert("Please fill out all required fields before submitting the form.");
            return;
        }

        if (bugYesOption.checked && bugs === "") {
            alert("Please describe the bugs encountered or select 'No' if no bugs were found.");
            return;
        }

        const feedbackData = {
            intuitive: intuitive,
            mostUsefulPage: mostUsefulPage,
            unnecessaryFeatures: unnecessaryFeatures,
            encounteredBugs: encounteredBugs,
            bugs: bugs,
            frequency: frequency,
            visualDesignRating: visualDesignRating,
            reportedUser: auth.currentUser.email
        };

        console.log("Submitting feedback: ", feedbackData);

        db.collection('FeedbackData').add(feedbackData)
            .then(() => {
                const userRef = db.collection('Users').doc(auth.currentUser.uid)
                userRef.get().then((doc) => {
                    if (doc.exists) {
                        data = doc.data()

                        userRef.update({
                            novacoins: data.novacoins += 100,
                            completedAccountFeedbackForm: true
                        })
                        .then(() => {
                            alert("Feedback successfully submitted! You have redeemed 100 novacoins.");

                            window.location = '/create_avatar.html'
                        })
                        .catch((error) => {
                            console.error("Error submitting feedback: ", error);
                            alert("There was an error redeeming novcacoins.. Please try again.");
                        })
                    }
                })
            })
            .catch((error) => {
                console.error("Error submitting feedback: ", error);
                alert("There was an error submitting your feedback. Please try again.");
            });
    });
}