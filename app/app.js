"use strict";

// 모듈
const express = require("express");
const app = express();
const home = require("./src/routes/home");

// 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들 웨어
app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;
