"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) {
      return users;
    }
    const newUser = fields.reduce((newUser, field) => {
      if (users.hasOwnProperty(field)) {
        newUser[field] = users[field];
        return newUser;
      }
    }, {});
    return newUser; // 가입된 유저들의 id, name, psword을 담은 새로운 배열 생성
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

  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./src/databases/user.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch((err) => console.error(err));
  }

  static getUserInfo(clienID) {
    return fs
      .readFile("./src/databases/user.json")
      .then((data) => {
        return this.#getUserInfo(data, clienID);
      })
      .catch((err) => console.error(err));
  }

  static async save(client) {
    const users = await this.getUsers(true);
    if (users.id.includes(client.id)) {
      throw "중복되는 아이디입니다.";
    }
    users.id.push(client.id);
    users.username.push(client.username);
    users.psword.push(client.psword);
    fs.writeFile("./src/databases/user.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
