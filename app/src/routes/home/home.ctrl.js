"use strict";

const User = require("../../models/User");

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
  menu: (req, res) => {
    res.render("menu/menu");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body); // body에 입력한 id,name,psword가 담긴 User 객체 생성
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
