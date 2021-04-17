const keys = require("./keys");

// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", () => {
  pgClient.query(
    "CREATE TABLE IF NOT EXISTS blogposts (" +
      "id serial PRIMARY KEY," +
      "created_on TIMESTAMP NOT NULL," +
      "title VARCHAR(500) NOT NULL," +
      "content VARCHAR(MAX) NOT NULL" +
      ")"
  ).catch((err) => console.log(err));
});

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

app.get("/blog/posts", async (req, res) => {
  const blogposts = await pgClient.query("SELECT * FROM blogposts");
  
  res.send(blogposts);
});

app.listen(5000, (err) => {
  console.log("Listening");
});
