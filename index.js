const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;
// app.get(ROUTES NAME, FUNCTION)

const users = [
  {
    id: "1",
    name: "ayooluwa",
    email: "ayooluwa@gmail.com",
    password: "Ayooluwa1.",
  },
  {
    id: "2",
    name: "Moyo",
    email: "omoyoosore@gmail.com",
    password: "Oluwayemisi1.",
  },
];

app.get("/", function (req, res) {
  res.json({
    status: "success",
  });
});

app.get("/users", function (req, res) {
  res.json({
    message: "Users retrieved",
    payload: users,
  });
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({
      status: "failed",
      message: "Please enter all fields",
      payload: {},
    });
  }

  if (email) {
    const foundUser = users.find((user) => user.email === email);
    res.json({
      status: "success",
      payload: foundUser,
    });
  }
});



app.post("/register", function (req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({
      status: "failed",
      message: "Please enter all fields",
      payload: {},
    });
  }


  users.push({
    id: Math.random() * 0.4,
    email: email,
    password: password,
    username: email
  })

  if (email) {
    const foundUser = users.find((user) => user.email === email);
    res.json({
      status: "success",
      payload: foundUser,
    });
  }
});

const startServer = async () => {
  try {
    app.listen(PORT);
    console.log(`Server Started on Port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

startServer();
