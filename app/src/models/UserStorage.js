"use strict";

const fs = require("fs").promises;

class UserStorage {
  static getUsers(...fields) {
    // const users = this.#users;
    const newUser = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
        return newUser;
      }
    }, {});
    return newUser; // 가입된 유저들의 id, pswrod를 담은 새로운 배열 생성
  }

  static #getUserInfo(data, clienID) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(clienID);
    const fields = Object.keys(users);
    const userInfo = fields.reduce((userInfo, field) => {
      userInfo[field] = users[field][idx];
      return userInfo;
    }, {});
    return userInfo;
  }

  static getUserInfo(clienID) {
    return fs
      .readFile("./src/databases/user.json")
      .then((data) => {
        return this.#getUserInfo(data, clienID);
      })
      .catch((err) => console.error(err));
  }
}

module.exports = UserStorage;
