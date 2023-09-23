console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1-bosqichda Expressga kirib kelayotgan ma'lumotlarga bogliq bolgan kodlar yoziladi

app.use(express.static("public")); // xar qanday browserdan kirib kelayotgan zapros un public folder ochiq degani
app.use(express.json()); // kirib kelayotgan datani OBJECT holatiga o'girib beradi
app.use(express.urlencoded({ extended: true })); // HTML dan traditional forum request ni qabul qilib oladi

// 2-bosqich: Sessionlarga bog'liq kodlar yoziladi

// 3-bosqich: Express uchun:    biz beckenda HTMLni yasaymiz Frontend uchun

app.set("views", "views");
app.set("view engine", "ejs");

// 4-bosqich:  Routinga moljallangan
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: red">Hello World by Khan</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style="background: red">Siz sovgalar pagedasiz</h1>`);
});

// Server hosil qilish

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
