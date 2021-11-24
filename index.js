const express = require("express");
const app = express();
const axios = require("axios");

const Users = require('./users.json')
const users = Users.users

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/array", (req, res) => {
  res.send(["Hello", "World"]);
});

app.get("/object", (req, res) => {
  res.send({
    name: "John",
    age: 30,
  });
});

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post's content",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post's content",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the third post's content",
  },
  {
    id: 4,
    title: "Fourth Post",
    content: "This is the fourth post's content",
  },
];

// const users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//   },
//   {
//     id: 11,
//     name: "Nicholas DuBuque",
//     username: "Rey.Padberg",
//   },
//   {
//     id: 12,
//     name: "Dorian Abshire",
//     username: "Kellie.Hoeger",
//   },
//   {
//     id: 13,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//   },
//   {
//     id: 14,
//     name: "Glenna Reichert",
//     username: "Delphine",
//   },
//   {
//     id: 15,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//   },
// ];

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/post/:id", (req, res) => {
  const post = posts.find((post) => post.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("The post with the given ID was not found.");
  } else {
    res.send(post);
  }
});

app.get("/users", (req, res) => {
  res.send(Users.users);
});

app.get("/user/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    res.status(404).send("The user with the given ID was not found.");
  } else {
    res.send(user);
  }
});

app.post("/user/new/", (req, res) => {
  const user = {
    id: req.query.id,
    name: req.query.name,
    username: req.query.username,
  };

  res.send(user);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
