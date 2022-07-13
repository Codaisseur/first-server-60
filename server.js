const express = require("express");
const userRouter = require("./routers/users")

const PORT = 4000;

const app = express();

//middlewares
app.use(express.json()); //parse the body

const myMiddleware = (req, res, next) => {
  console.log("In middleware")
  next()
}

const randomMiddleware = (req, res, next) => {
  const randomNumber = Math.random() * 10
  console.log("number", randomNumber)
  if (randomNumber < 5){
    console.log("Welcome")
    next()
  } else {
    res.status(402).send("Not authorized in this space")
  }
}

//routers
app.use("/users", randomMiddleware, userRouter)


app.listen(PORT, () => console.log("Listening on port 4000"));
