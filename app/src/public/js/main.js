"use strict";

// navigation 클릭 이벤트

const logo = document.querySelector(".header__logo");

logo.addEventListener("click", () => {
  location.reload();
});

const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", goToMenu);

function goToMenu() {
  location.href = "/menu";
}

// 회원가입, 로그인  화면 이동 버튼

const signInBtn = document.querySelector(".signIn-btn"),
  loginBtn = document.querySelector(".login-btn");

signInBtn.addEventListener("click", handleBtnClick);
loginBtn.addEventListener("click", handleBtnClick);

function handleBtnClick(e) {
  if (e.target.value === "logIn") {
    location.href = "/login";
  }
  location.href = "/register";
}

// 이미지 넘기기 버튼

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const imageWrapper = document.querySelector(".image-wrapper").children;
const imageLength = imageWrapper.length;
const dotControl = document.querySelector(".slider-dot-control").children;

let index = 0;
const CLASSNAME__SHOW = "show";
const CLASSNAME__ACTIVE = "active";

prev.addEventListener("click", () => {
  handleClick("prev");
});
next.addEventListener("click", () => {
  handleClick("next");
});

function handleClick(whichBtn) {
  if (whichBtn === "prev") {
    index--;
    if (index < 0) {
      index = imageLength - 1;
    }
  } else {
    index++;
    if (index > imageLength - 1) {
      index = 0;
    }
  }
  for (let i = 0; i < imageLength; i++) {
    imageWrapper[i].classList.remove(CLASSNAME__SHOW);
    dotControl[i].classList.remove(CLASSNAME__ACTIVE);
  }
  imageWrapper[index].classList.add(CLASSNAME__SHOW);
  dotControl[index].classList.add(CLASSNAME__ACTIVE);
}
