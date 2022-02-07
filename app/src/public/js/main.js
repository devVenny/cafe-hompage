"use strict";

const signInBtn = document.querySelector(".signIn-btn"),
  loginBtn = document.querySelector(".login-btn");

signInBtn.addEventListener("click", handleClick);
loginBtn.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.value === "logIn") {
    location.href = "/login";
  }
  location.href = "/register";
}
