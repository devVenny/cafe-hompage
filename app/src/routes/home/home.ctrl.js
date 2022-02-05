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
};

const user = {
  id: ["hs421", "hs0421"],
  psword: ["123", "1234"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;
    if (user.id.includes(id)) {
      return res.json({ success: true });
    }
    return res.json({ success: false, msg: "존재하지 않는 아이디입니다." });
  },
};

module.exports = {
  output,
  process,
};
