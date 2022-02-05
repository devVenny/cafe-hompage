"use strict";

const id = document.getElementById("id"),
  psword = document.getElementById("psword"),
  button = document.getElementById("button");

button.addEventListener("click", handleClick);

function handleClick() {
  const req = {
    id: id.value,
    psword: psword.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(req),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.error("데이터 패치 실패"));
}
