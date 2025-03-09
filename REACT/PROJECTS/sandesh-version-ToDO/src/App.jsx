import AppHeader from "./components/AppHeader";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "./components/AppFooter";
import ItemsList from "./components/ItemsList";
import { useState } from "react";

function App() {
  let tasks = [];

  let [tasksList, settaskList] = useState(tasks);

  const taskAdded = (todoItem) => {
    const newTaskList = [...tasksList, todoItem];
    settaskList(newTaskList);
  };

  const onDeleteHandler = () => {
    if (tasksList.length > 0) {
      const isConfirmed = window.confirm(
        `This deletes all the task for today.
        Are you sure you want to delete this ?`
      );
      if (isConfirmed) {
        settaskList("");
      }
    } else {
      window.alert("Nothing to delete for today");
    }
  };

  const onEachTaskDelete = (task) => {
    // alert("Hello");
    const isConfirmed = window.confirm(
      `Do you really want to delete the task "${task}" ?`
    );

    if (isConfirmed) {
      const upDatedTasks = tasksList.filter((item) => !(item === task));
      settaskList(upDatedTasks);
    }
  };

  return (
    <>
      <div className="container">
        <AppHeader />
        <ToDoInput onSubmit={taskAdded} />
        <ItemsList tasks={tasksList} onEachDelete={onEachTaskDelete} />
        <AppFooter tasks={tasksList} onDelete={onDeleteHandler} />
      </div>
    </>
  );
}

export default App;
