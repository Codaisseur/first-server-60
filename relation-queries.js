const User = require("./models").user
const TodoList = require("./models").todoList
const TodoItem = require("./models").todoItem

const getListsWithUser = async () => {
  try {
    const lists = await TodoList.findAll({ raw: true, include: User})
    console.log(lists)
  } catch (e) {
    console.log(e.message)
  }
}

// getListsWithUser()

const getListsWithItem = async () => {
  try {
    const lists = await TodoItem.findAll({ raw: true, include: TodoList})
    console.log(lists)
  } catch (e) {
    console.log(e.message)
  }
}

getListsWithItem()
