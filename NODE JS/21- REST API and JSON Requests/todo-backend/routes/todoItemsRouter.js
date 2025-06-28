const express = require("express");

const todoItemsRouter = express.Router();

const todoItemsController = require("../controllers/todoItemsController");

todoItemsRouter.post("/", todoItemsController.createTodoItems);
todoItemsRouter.get("/", todoItemsController.getTodoItems);
todoItemsRouter.delete("/:id", todoItemsController.deleteTodoItem);
todoItemsRouter.put("/:id/completed", todoItemsController.markCompleted);

module.exports = todoItemsRouter;
