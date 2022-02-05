"use strict";

class UserStorage {
  static #users = {
    id: ["hs421", "hs0421"],
    psword: ["123", "1234"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUser = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
        return newUser;
      }
    }, {});
    return newUser;
  }
  // login() {
  //   const client = this.body;
  //   const id = client.id;
  //   const psword = client.psword;
  //   const idx = user.id.indexOf(id);
  //   if (user.id.includes(id)) {
  //     if (user.psword[idx] === psword) {
  //       return { success: true };
  //     }
  //     return { success: false, msg: "비밀번호가 틀렸습니다." };
  //   }
  //   return { success: false, msg: "존재하지 않는 아이디입니다." };
  // }
}

module.exports = UserStorage;
