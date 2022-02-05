"use strict";

const { Router } = require("express");
const expres = require("express");
const routes = expres.Router();

const ctrl = require("./home.ctrl");

routes.get("/", ctrl.home);
routes.get("/login", ctrl.login);
routes.get("/register", ctrl.register);

module.exports = routes;
