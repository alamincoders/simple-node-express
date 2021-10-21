const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Node JS. Hey I am a Student and also web developer.. I am learn Node JS. Wow! I am Excited to learn nodemon");
});

const users = [
  {
    id: 0,
    name: "Al Amin",
    email: "alaminsbl502@gmail.com",
    phone: "01906221552",
  },
  {
    id: 1,
    name: "Shabnur",
    email: "shabnur@gmail.com",
    phone: "01906221552",
  },
  {
    id: 2,
    name: "Moriom",
    email: "moriom@gmail.com",
    phone: "01906221552",
  },
  {
    id: 3,
    name: "Sonia",
    email: "sonia@gmail.com",
    phone: "01906221552",
  },
  {
    id: 4,
    name: "Karina",
    email: "karina@gmail.com",
    phone: "01906221552",
  },
];
app.get("/users", (req, res) => {
  const search = req.query.search;

  //   user query parameter
  if (search) {
    const searchResult = users.filter((user) => user.name.toLowerCase().includes(search));
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "fazli"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy Yummy tok marka fazli");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
