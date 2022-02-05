"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/main");
  },
  login: (req, res) => {
    res.render("onBoard/login");
  },
  register: (req, res) => {
    res.render("onBoard/register");
  },
};
const process = {
  login: (req, res) => {
    const newUser = UserStorage.getUsers("id", "psword");
    console.log(newUser);
  },
};

module.exports = {
  output,
  process,
};
