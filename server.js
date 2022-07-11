const express = require("express");
const User = require("./models").user;
const PORT = 4000;

const app = express();

app.use(express.json());

app.get("/users", async (request, response, next) => {
  try {
    const users = await User.findAll();
    // we need to get Users from db
    // send them back to the client
    response.send(users);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const userId = req.params.id;
    // 2. findByPk => id
    const theUser = await User.findByPk(userId);
    res.send(theUser);
  } catch (e) {
    next(e);
  }
});

// axios.post("/signup", { name: 'Matias', email: 'm@m.com' });

app.post("/signup", async (req, res, next) => {
  try {
    // email, name => frontend
    const { email, name } = req.body;
    const newUser = await User.create({ name, email });
    res.send(newUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.listen(PORT, () => console.log("Listening on port 4000"));
