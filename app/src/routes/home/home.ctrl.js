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

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
    // return res.json(response);
    // const repsonse = user.login();
    // return res.json(response);
    //   const client = req.body;
    //   const id = client.id
    //   const psword = client.psword;
    //   const newUser = UserStorage.getUsers("id", "psword");
    //   if (id) {
    //     return { success: false, msg: "비밀번호가 틀렸습니다." };
    //   }
    //   return { success: false, msg: "존재하지 않는 아이디입니다." };
    // },
  },
};

module.exports = {
  output,
  process,
};
