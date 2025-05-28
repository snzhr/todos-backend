const { add, getAll, getOne, remove, update } = require("./db");

async function getTodos(req, res) {
  try {
    const todos = await getAll();
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
}

async function getTodo(req, res) {
  try {
    const id = Number(req.params.id);
    const todo = await getOne(id);
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(req, res) {
  try {
    const newTodo = {
      ...req.body,
      completed: false,
    };
    const response = await add(newTodo);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}

async function updateTodo(req, res) {
  try {
    const id = Number(req.params.id);
    const response = await update(id, req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo(req, res) {
  try {
    const id = Number(req.params.id);
    const response = await remove(id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo
};
