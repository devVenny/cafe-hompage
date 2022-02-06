"use strict";

const expres = require("express");
const routes = expres.Router();
const ctrl = require("./home.ctrl");

routes.get("/", ctrl.output.home);
routes.get("/login", ctrl.output.login);
routes.get("/register", ctrl.output.register);

routes.post("/login", ctrl.process.login);
routes.post("/register", ctrl.process.register);

module.exports = routes;
