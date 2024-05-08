const userForm = document.querySelector(".userForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errDisplay = document.getElementById("errDisplay");

console.log(userForm);
console.log(username);

userForm.addEventListener("submit", (e) => {
  console.log(username.value.length);
  let messages = [];
  if (username.value.length < 3 || username.value.length > 16) {
    messages.push("Name length must be between 3 and 16 characters, inclusive");
  }

  if (password.value.length < 10 || password.value.length > 20) {
    messages.push(
      "Password length must be between 10 and 20 characters, inclusive"
    );
  }

  if (messages.length > 0) {
    e.preventDefault();
    errDisplay.style.color = "red";
    errDisplay.innerText = messages.join("\n ");
  }
});
