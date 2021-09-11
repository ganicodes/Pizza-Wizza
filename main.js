var loginButton = document.getElementById("login-form");
var registerButton = document.getElementById("registeration-form");
var toggleButton = document.getElementById("btn");

function register() {
  loginButton.style.left = "-400px";
  registerButton.style.left = "50px";
  toggleButton.style.left = "110px";
}
function login() {
  loginButton.style.left = "50px";
  registerButton.style.left = "450px";
  toggleButton.style.left = "0";
}
