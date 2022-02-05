"use strict";

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
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
