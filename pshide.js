const password = document.querySelector(".password");
const eyeButton = document.querySelector(".fas");
let isPass = true;
function togglePass() {
  if (isPass) {
    password.setAttribute("type", "text");
    eyeButton.classList.remove("fa-eye-slash");
    eyeButton.classList.add("fa-eye");
    isPass = false;
  } else {
    password.setAttribute("type", "password");
    eyeButton.classList.remove("fa-eye");
    eyeButton.classList.add("fa-eye-slash");
    isPass = true;
  }
}
