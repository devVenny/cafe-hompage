"use strict";

const bodyParser = require("body-parser");

const user = {
  id: ["hs421", "hs0421"],
  psword: ["123", "1234"],
};

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const { id, psword } = client;
    const idx = user.id.indexOf(id);
    const keys = Object.keys(user);
    const userInfo = keys.reduce((newUser, value) => {
      return (newUser[value] = user[value][idx]);
    }, {});
    return userInfo;
    // if (id) {
    //   if (user.id.includes(id) && user.psword.includes(psword)) {
    //     return { success: true };
    //   }
    //   return { success: false, msg: "비밀번호가 틀렸습니다." };
    // }
    // return { success: false, msg: "아이디가 존재하지 않습니다." };
  }
}

module.exports = User;
