"use strict";

const id = document.getElementById("id"),
  username = document.getElementById("username"),
  psword = document.getElementById("psword"),
  confirmPsword = document.getElementById("confirm-psword"),
  button = document.getElementById("button");

button.addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault();
  if (!id.value) {
    return alert("아이디를 입력해주세요");
  }
  if (!psword.value) {
    return alert("비밀번호를 입력해주세요");
  }
  if (psword.value !== confirmPsword.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    id: id.value,
    username: username.value,
    psword: psword.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(`${res.msg}`);
      }
    })
    .catch((err) => console.error("데이터 패치 실패"));
}
