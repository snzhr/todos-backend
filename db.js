const { v4: secure } = require("@lukeed/uuid/secure");

const todos = [
    {id: 1, title: "Test", completed: false},
    {id: 2, title: "Another todo", completed: false}
];

async function getAll() {
  return new Promise((resolve, reject) => {
    if (todos) {
      resolve(todos);
    } else {
      reject({ message: "Something went wrong" });
    }
  });
}

async function add(newTodo) {
  return new Promise((resolve, reject) => {
    if (newTodo) {
      const todo = {
        id: secure(),
        ...newTodo,
      };
      todos.push(todo);
      resolve(todo);
    } else {
      reject({ message: "Something went wrong" });
    }
  });
}

async function getOne(id) {
  return new Promise((resolve, reject) => {
    const foundItem = todos.find((item) => item.id === id);
    if (foundItem) {
      resolve(foundItem);
    } else {
      reject({ message: "Something went wrong" });
    }
  });
}

async function update(id, newTodo) {
  return new Promise((resolve, reject) => {
    const foundItemIndex = todos.findIndex((item) => item.id === id);
    if (foundItemIndex !== -1) {
      todos[foundItemIndex] = {
        ...todos[foundItemIndex],
        ...newTodo,
      };
      resolve(todos[foundItemIndex]);
    } else {
      reject({ message: "Something went wrong" });
    }
  });
}

async function remove(id) {
  return new Promise((resolve, reject) => {
    const foundItemIndex = todos.findIndex((item) => item.id === id);
    if (foundItemIndex !== -1) {
      todos.splice(foundItemIndex, 1);
      resolve({ message: "removed" });
    } else {
      reject({ message: "Something went wrong" });
    }
  });
}

module.exports = {
  getAll,
  add,
  getOne,
  remove,
  update
};
