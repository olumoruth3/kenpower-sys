const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

// Show/hide password and change icon
pwShowHide.forEach((eyeIcon, index) => {
  eyeIcon.addEventListener("click", () => {
    const pwField = pwFields[index]; // Match the icon to its respective password field
    if (pwField.type === "password") {
      pwField.type = "text";
      eyeIcon.classList.replace("uil-eye-slash", "uil-eye"); // Update icon
      eyeIcon.classList.replace("uil-eye-slash", "uil-eye"); 
    } else {
      pwField.type = "password";
      eyeIcon.classList.replace("uil-eye", "uil-eye-slash"); // Revert icon
      eyeIcon.classList.replace("uil-eye", "uil-eye-slash"); 
    }
  });
});
