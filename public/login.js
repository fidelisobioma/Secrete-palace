//form validation
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const usermessage = document.querySelector("#usermessage");
console.log(usermessage);
const passMessage = document.querySelector("#passmessage");
const confirmPassword = document.querySelector("#confirmpassword");
const confmessage = document.querySelector("#confmessage");
const emailMessage = document.querySelector("#emailmessage");
const submit = document.querySelector("form");

submit.addEventListener("submit", (e) => {
  if (!username.checkValidity()) {
    usermessage.textContent = username.validationMessage;
    hasError = true;
    e.preventDefault();
  } else {
    usermessage.textContent = "";
  }

  if (!email.checkValidity()) {
    emailMessage.textContent = email.validationMessage;
    e.preventDefault();
  } else {
    emailMessage.textContent = "";
  }

  if (!password.checkValidity()) {
    passMessage.textContent = password.validationMessage;
    e.preventDefault();
  } else {
    passMessage.textContent = "";
  }

  if (confirmPassword.value !== password.value) {
    confmessage.textContent = "password does not match";
    e.preventDefault();
  } else {
    confmessage.textContent = "";
  }
});
