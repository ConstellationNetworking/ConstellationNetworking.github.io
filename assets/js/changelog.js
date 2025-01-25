function parseDateAsUTC(dateString) {
    var parts = dateString.split('-');
    return new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
}

function timeSince(date) {
    const releaseDate = parseDateAsUTC(date);
    const currentDate = new Date();
    const seconds = Math.floor((currentDate - releaseDate) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 604800;
    if (interval > 1) {
        return Math.floor(interval) + " weeks ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}

function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const date = parseDateAsUTC(dateString);
    return date.toLocaleDateString('en-US', options);
}


function replaceTextWithSpan(element) {
    element.innerHTML = element.innerHTML.replace(/`([^`]+)`/g, function (match, p1) {
        if (p1.includes('.html')) {
            return `<a style="text-decoration: underline; text-decoration-color: #0ea5e9; color: #0ea5e9; text-underline-offset: 2px; font-weight: 600;" href="/${p1}">` + p1 + '</a>';
        } else {
            return `<a style="text-decoration: underline; text-decoration-color: #0ea5e9; color: #0ea5e9; text-underline-offset: 2px; font-weight: 600;" href="${p1}">` + p1 + '</a>';
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const dates = document.querySelectorAll('.release-date');
    dates.forEach(function (dateElement) {
        const date = dateElement.getAttribute('data-date');
        dateElement.textContent = timeSince(date) + " — " + formatDate(date);
    });

    const elements = document.querySelectorAll('li');
    elements.forEach(replaceTextWithSpan);
});