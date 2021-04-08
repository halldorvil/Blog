const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers

const posts = [
  {
    id: 1,
    date: "04/07/2021",
    title: "Welcome to my blog!",
    content:
      "Hi there!\n\n" +
      "My name is Halldor and I am a software developer from Iceland. " +
      "I recently started studying React and decided to start this blog as a way to apply and put those skills into practice. " +
      "Who knows, maybe I'll actually keep this blog going and share some of what's going on in my life!\n\n" +
      "Cheers,\n" +
      "Halldor Vilhjalmsson",
  },
];

app.get("/test", (req, res) => {
  console.log("test");
  res.send("Hi");
});

app.get("/blog/posts", (req, res) => {
  res.send(posts);
});

app.listen(5000, (err) => {
  console.log("Listening");
});
