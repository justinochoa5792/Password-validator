const password1 = document.getElementById("passwordField1");
const password2 = document.getElementById("passwordField2");
const field = document.getElementById("field");
const errorText = document.querySelector(".error-text");
const btn = document.getElementById("submitBtn");

function passwordsMatch() {
  if (password1.value !== password2.value) {
    errorText.classList.remove("matched");
    errorText.style.display = "block";
    errorText.textContent = "PASSWORDS DO NOT MATCH";
  } else {
    errorText.classList.add("matched");
    errorText.style.display = "block";
    errorText.textContent = "Nice! Confirm Password Matched";
  }
}

field.addEventListener("submit", (e) => {
  e.preventDefault();
  passwordsMatch();
});
