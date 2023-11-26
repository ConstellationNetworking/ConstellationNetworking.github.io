let userHistoryList = [];

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

    // TODO: Iterate through userHistoryList and set each user's progress to 0
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
    console.log('Chat button clicked!');
    updateProgress('jerry', getProgress('jerry') + 0.1);
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