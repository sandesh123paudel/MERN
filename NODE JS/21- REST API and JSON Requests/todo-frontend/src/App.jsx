import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";

import {
  useEffect,
  useState
}

from "react";

import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
}

from "./services/itemsService";

function App() {
  let [todoItems,
  setItemState]=useState([]);

  const refreshItems=async ()=> {
    const updatedItems=await getItemsFromServer();
    setItemState(updatedItems);
  }

  ;

  useEffect(()=> {
      refreshItems();
    }

    , []);

  const itemsAdded=async (item, date)=> {
    await addItemToServer(item, date);
    await refreshItems();
  }

  ;

  const onDeleteHandler=async (id)=> {
    const item=todoItems.find((item)=> item.id===id);
    const isConfirmed=window.confirm(`Do you really want to delete "${item.name}"? This action cannot be undone.`);

    if (isConfirmed) {
      const deletedId=await deleteItemFromServer(id);
      const upDatedItems=todoItems.filter((item)=> item.id !==(deletedId.id || deletedId));
      setItemState(upDatedItems);
    }
  }

  ;

  return (<center className="todo-container"> <AppName /> <AppTodo onSubmit= {
      itemsAdded
    }

    /> <Message data= {
      todoItems
    }

    /> <TodoItems todoItems= {
      todoItems
    }

    onDelete= {
      onDeleteHandler
    }

    onComplete= {
      refreshItems
    }

    /> </center>);
}

export default App;