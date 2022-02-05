"use strict";

const { Router } = require("express");
const expres = require("express");
const routes = expres.Router();

routes.get("/", (req, res) => {
  res.render("onBoard/login");
});

routes.get("/register", (req, res) => {
  res.render("onBoard/register");
});

module.exports = routes;
