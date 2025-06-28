const TodoItem = require("../models/todo");

exports.createTodoItems = async (req, res, next) => {
  console.log(req.body);
  const { task, date } = req.body;
  const todoItem = new TodoItem({ task, date });
  await todoItem.save();
  res.status(201).json({ todoItem });
};

exports.getTodoItems = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.json({ todoItems });
};

exports.deleteTodoItem = async (req, res, next) => {
  const { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({ _id: id });
};

exports.markCompleted = async (req, res, next) => {
  const todoId = req.params.id;
  const todoItem = await TodoItem.findById(todoId);
  if (!todoItem) {
    return res.status(404).json({ message: "Todo item not found" });
  } else {
    todoItem.completed = true; // Only set to true, never toggle back
    await todoItem.save();
    res.status(200).json({ todoItem });
  }
};
