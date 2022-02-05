"use strict";

const home = (req, res) => {
  res.render("home/main");
};

const login = (req, res) => {
  res.render("onBoard/login");
};

const register = (req, res) => {
  res.render("onBoard/register");
};

module.exports = {
  home,
  login,
  register,
};
