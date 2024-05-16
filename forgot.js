// Function to toggle the reset password form
function toggleResetPasswordForm() {
    const resetPasswordForm = document.getElementById('reset-password-form');
    const forgotPasswordLink = document.getElementById('forgot-password-link');

    if (resetPasswordForm.hidden) {
        // Show the reset password form
        resetPasswordForm.hidden = false;
        forgotPasswordLink.textContent = 'Cancel'; // Change link text
    } else {
        // Hide the reset password form
        resetPasswordForm.hidden = true;
        forgotPasswordLink.textContent = 'Forgot password?'; // Restore original text
    }
}

// Event listener for the "Forgot password?" link
document.getElementById('forgot-password-link').addEventListener('click', toggleResetPasswordForm);

// Function to handle password reset
function handlePasswordReset() {
    const email = document.getElementById('reset-email').value;

    // Send a password reset email to the user
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent successfully
            alert('Password reset email sent. Check your inbox.');
            // Hide the reset password form after a successful request
            document.getElementById('reset-password-form').hidden = true;
            document.getElementById('forgot-password-link').textContent = 'Forgot password?'; // Restore link text
        })
        .catch((error) => {
            // Handle errors
            console.error(error.message);
            alert('Password reset failed. Please check the email address.');
        });
}

// Event listener for the reset button
document.getElementById('reset-button').addEventListener('click', handlePasswordReset);
