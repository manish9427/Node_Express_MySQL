// let x = 5;
// console.log("start: " + x);

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/hello", (req, res) => {
  res.send("This the Post Method!");
});

// app.all("/test", (res, req) => {
//   res.send("all Methods!");
// });

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
