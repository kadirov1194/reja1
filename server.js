console.log("Web Serverni boshlash");
const { log } = require("console");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1-bosqichda Expressga kirib kelayotgan ma'lumotlarga bogliq bolgan kodlar yoziladi

app.use(express.static("public")); // xar qanday browserdan kirib kelayotgan zapros un public folder ochiq degani
app.use(express.json()); // kirib kelayotgan datani OBJECT holatiga o'girib beradi
app.use(express.urlencoded({ extended: true })); // HTML dan traditional forum request ni qabul qilib oladi

// 2-bosqich: Sessionlarga bog'liq kodlar yoziladi

// 3-bosqich: Express uchun:    biz beckenda HTMLni yasaymiz Frontend uchun

app.set("views", "views");
app.set("view engine", "ejs");

// 4-bosqich:  Routinga moljallangan
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("harid");
});

// Server hosil qilish

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
