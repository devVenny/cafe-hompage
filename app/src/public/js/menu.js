"use strict";

//

const logo = document.querySelector(".header__logo");
const menuBtn = document.querySelector(".menuBtn");

logo.addEventListener("click", () => {
  location.href = "/";
});

menuBtn.addEventListener("click", () => {
  location.reload();
});
