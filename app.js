const express = require("express");
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("onBoard/login");
});

app.get("/register", (req, res) => {
  res.render("onBoard/register");
});

// app.get("/ ", (req, res) => {
//   res.send("dㅣ곳ㅇ");
// });

app.listen(3000, () => {
  console.log("서버 가동");
});
