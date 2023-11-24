import { getBaseUrl } from "/assets/js/helpers/utility_functions.js";

function validateForm() {
    const form =
        document.getElementById("setup-profile-form") ||
        document.getElementById("edit-profile-form");

    const profilePictureImage = document.getElementById(
        "profile-picture-picker-image"
    );

    new window.JustValidate(`#${form.id}`, {
        errorsContainer: "#errors-container_custom-container",
        validateBeforeSubmitting: true,
    })
        .addField(
            "#profile-picture-picker",
            [
                {
                    rule: "required",
                },
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
                    value: 150,
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
            const baseUrl = getBaseUrl();
            const hasProfilePicture =
                profilePictureImage.src != `${baseUrl}images/default-pfp.jpg`;

            if (hasProfilePicture) {
                HTMLFormElement.prototype.submit.call(form);
            }
        });

    document
        .getElementById("profile-picture-picker")
        .addEventListener("change", (event) => {
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

document.addEventListener("DOMContentLoaded", () => {
    let auth = firebase.auth();
    let db = firebase.firestore();

    const profilePictureImageInput = document.getElementById("profile-picture-picker");
    const bioInput = document.getElementById("bio");
    const fullNameInput = document.getElementById("edit-profile-full-name");
    const useridInput = document.getElementById('edit-profile-userid');
    const userEmail = document.getElementById('edit-profile-email');
    const submitButton = document.getElementById('submitButton');

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
    })

    submitButton.onclick = submitProfile;

    function submitProfile() {
        event.preventDefault();
        validateForm();

        if (!firebase.storage) {
            console.log('Firebase storage is not available.');
            return;
        }

        // upload profile pic to storage
        const file = profilePictureImageInput.files[0];

        auth.onAuthStateChanged(function (user) {
            if (user) {
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = new Image();
                        img.onload = function() {
                            if (img.width === img.height) {
                                const storageRef = firebase.storage().ref();
                                const fileExtension = file.name.split('.').pop();
                                const filename = `${user.uid}.${fileExtension}`
                                const userProfileImageRef = storageRef.child(`users_profilePic/${filename}`);

                                userProfileImageRef.put(file).then((snapshot) => {
                                    console.log('Uploaded a profile picture');

                                    snapshot.ref.getDownloadURL().then((downloadURL) => {
                                        // update profile details
                                        const currentUserRef = db.collection('Users').doc(auth.currentUser.uid);
                                        currentUserRef.get().then((doc) => {
                                            if (doc.exists) {
                                                currentUserRef.update({
                                                    name: fullNameInput.value,
                                                    bio: bioInput.value,
                                                    profileIMG: downloadURL
                                                }).then(() => {
                                                    window.location.href = '/chat.html';
                                                }).catch((error) => {
                                                    alert('Error updating profile. Please try again later.');
                                                })
                                            }
                                        });
                                    })
                                })
                            } else {
                                alert('Please upload a square image.')
                            }
                        }

                        img.onerror = function() {
                            alert('There was an error reading the image.')
                        }

                        img.src = e.target.result;
                    };

                    reader.onerror = function() {
                        console.log('There was an error reading the file.');
                    }

                    reader.readAsDataURL(file);
                } else {
                    alert('Please upload a profile picture.')
                }
            }
        })
    }    
});