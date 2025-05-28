const express = require("express");
const router = express.Router();
const {
  addTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("./todosController");

router.route("/").get(getTodos).post(addTodo);

router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
