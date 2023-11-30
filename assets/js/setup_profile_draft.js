// import { getBaseUrl } from "/assets/js/helpers/utility_functions.js";

let useDefaultImageFlag = false;

function validateForm() {
    const form = document.getElementById("setup-profile-form") || document.getElementById("edit-profile-form");

    new window.JustValidate(`#${form.id}`, {
        errorsContainer: "#errors-container_custom-container",
        validateBeforeSubmitting: true,
    })
        .addField(
            "#profile-picture-picker",
            [
                {
                    rule: "minFilesCount",
                    value: form.id === "edit-profile-form" ? 0 : 1,
                    errorMessage: "Profile picture is required.",
                },
                {
                    rule: "maxFilesCount",
                    value: 1,
                },
                {
                    rule: "files",
                    value: {
                        files: {
                            extensions: ["jpeg", "jpg", "png", "bmp"],
                            maxSize: 5000000,
                            minSize: 10000,
                            types: ["image/jpeg", "image/jpg", "image/png", "image/bmp"],
                        },
                    },
                    errorMessage:
                        "Invalid image: Max file size 5MB (JPEG, JPG, PNG, BMP).",
                },
            ],
            {
                errorsContainer: "#errors-container_custom-profile-picture",
            }
        )
        .addField(
            "#bio",
            [
                {
                    rule: "required",
                },
                {
                    rule: "maxLength",
                    value: 300,
                },
            ],
            {
                errorsContainer: "#errors-container_custom-bio",
            }
        )
        .addField(
            "#edit-profile-full-name",
            [
                {
                    rule: "required",
                },
            ],
            {
                errorsContainer: "#errors-container_custom-full-name",
            }
        )
        .onSuccess((event) => {
            if (useDefaultImageFlag) {
                useDefaultImage();
            } else {
                uploadProfilePicture();
            }
        });

    document.getElementById("profile-picture-picker").addEventListener("change", (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", (event) => {
            document.querySelector(".profile-picture-picker-image").src =
                event.target.result;
        });

        if (file) {
            reader.readAsDataURL(file);
        }
    });
}

function useDefaultImage() {
    const storageRef = firebase.storage().ref();
    const auth = firebase.auth();
    const db = firebase.firestore();

    const defaultURL = '/assets/img/default_user.jpeg';
    fetch(defaultURL)
        .then(response => response.blob())
        .then(blob => {
            const userProfileImageRef = storageRef.child(`users_profilePic/${auth.currentUser.uid}.jpeg`);
            return userProfileImageRef.put(blob);
        })
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(downloadURL => {
            return db.collection('Users').doc(auth.currentUser.uid).update({
                profileIMG: downloadURL
            });
        })
        .then(() => {
            console.log('Updated profile with default image');
            document.getElementById('submitButton').innerText = 'Confirm'
        })
        .catch(error => {
            console.error("Error setting default picture:", error);
            alert('Error setting default picture. Please try again later.');
        });
}

function submitProfile() {
    const profilePictureImageInput = document.getElementById("profile-picture-picker");
    const auth = firebase.auth();
    const db = firebase.firestore();

    if (useDefaultImageFlag) {
        useDefaultImage(auth, db);
    } else {
        const file = profilePictureImageInput.files[0];
        if (file) {
            document.getElementById('submitButton').innerText = 'Loading...'
            
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                    if (img.width === img.height) {
                        uploadProfilePicture(file, auth, db);
                    } else {
                        alert('Please upload a square image.');
                    }
                };
                img.onerror = function () {
                    alert('There was an error reading the image.');
                };
                img.src = e.target.result;
            };
            reader.onerror = function () {
                alert('There was an error reading the file.');
            };
            reader.readAsDataURL(file);
        } else if (!useDefaultImageFlag) {
            alert('Please upload a profile picture.');
        }
    }
}

function updateUserProfile(downloadURL, auth, db) {
    const fullNameInput = document.getElementById("edit-profile-full-name");
    const bioInput = document.getElementById("bio");

    if (auth.currentUser) {
        const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);

        currentUserRef.update({
            name: fullNameInput.value,
            bio: bioInput.value,
            profileIMG: downloadURL
        }).then(() => {
            console.log('Profile updated with new image');
            window.location.href = '/index.html';
        }).catch((error) => {
            alert('Error updating profile. Please try again later.');
            console.error("Error updating profile:", error);
        });
    } else {
        console.error("User is not authenticated");
        alert('User is not authenticated. Please log in and try again.');
    }
}


function uploadProfilePicture(file, auth, db) {
    const storageRef = firebase.storage().ref();
    const fileExtension = file.name.split('.').pop();
    const filename = `${auth.currentUser.uid}.${fileExtension}`;
    const userProfileImageRef = storageRef.child(`users_profilePic/${filename}`);

    userProfileImageRef.put(file).then(snapshot => {
        return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
        return updateUserProfile(downloadURL, auth, db);
    }).catch(error => {
        alert('Error uploading profile picture. Please try again later.');
        console.error("Error uploading profile picture:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let auth = firebase.auth();
    let db = firebase.firestore();

    const fullNameInput = document.getElementById("edit-profile-full-name");
    const useridInput = document.getElementById('edit-profile-userid');
    const userEmail = document.getElementById('edit-profile-email');
    const submitButton = document.getElementById('submitButton');
    const useDefaultButton = document.getElementById('use-default-image');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        useDefaultImageFlag = false;
        submitProfile();
    });

    useDefaultButton.addEventListener('click', () => {
        useDefaultImageFlag = true;
        submitProfile();
    });

    auth.onAuthStateChanged(function (user) {
        if (user) {
            validateForm();

            const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);
            currentUserRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();

                    fullNameInput.value = data.name;
                    useridInput.value = data.senderId;
                    userEmail.value = data.email;
                }
            });
        } else {
            alert('Cannot get current user details. Please sign in first or refresh the page.');
            window.location.href = '/signin.html';
        }
    });
});