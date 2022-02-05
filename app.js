"use strict";

// 모듈
const express = require("express");
const app = express();
const home = require("./routes/home");

// 세팅
app.set("views", "views");
app.set("view engine", "ejs");

// 미들 웨어
app.use("/", home);

app.listen(3000, () => {
  console.log("서버 가동");
});
