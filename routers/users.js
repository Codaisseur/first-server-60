const { Router } = require("express")
const User = require("../models").user;
const TodoList = require("../models").todoList
const TodoItem = require("../models").todoItem

const router = new Router()

//get users
//http :4000/users
router.get("/", async (request, response, next) => {
  try {
    const users = await User.findAll();
    response.send(users);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one user with lists and items
//http :4000/users/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const userId = req.params.id;
    // 2. findByPk => id
    const theUser = await User.findByPk(userId, { include: 
      { model: TodoList, include: [TodoItem]} 
    });
    res.send(theUser);
  } catch (e) {
    next(e);
  }
});

// axios.post("/signup", { name: 'Matias', email: 'm@m.com' });

router.post("/", async (req, res, next) => {
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

//update user
//http PATCH :4000/user/5 name=ABCD
router.patch("/:id", async (req, res, next) => {
  try {
    //1. get the id from the params
    const { id } = req.params
    //1.1 get the info from the body
    const { name, address } = req.body
    //2. find the user to update
    const userToUpdate = await User.findByPk(id)

    if (!userToUpdate) {
      res.status(404).send("User not found")
    }
    //3. update the user
    const updated = await userToUpdate.update({ name, address })
    //4. send a response
    res.send(updated)
  } catch (e){
    console.log(e.message)
    next(e)
  }
})

//delete user
//http DELETE :4000/user/5
router.delete("/:id", async (req, res, next) => {
  try {
    //1.get the id from the params
    const { id } = req.params
    //2. find what you want to delete
    const userToDelete = await User.findByPk(id)
    //3. delete
    await userToDelete.destroy()
    //4. send a response
    res.send("User teminated")
  } catch (e){
    console.log(e.message)
    next(e)
  }
})

module.exports = router