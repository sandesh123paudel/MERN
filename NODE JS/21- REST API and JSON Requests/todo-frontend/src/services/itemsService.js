export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  return mapServerResponseToLocalItem(await response.json());
};

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const data = await response.json();
  return data.todoItems.map(mapServerResponseToLocalItem);
};

export const markItemAsCompleted = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/todo/${id}/completed`,
    {
      method: "PUT",
    }
  );
  return mapServerResponseToLocalItem((await response.json()).todoItem);
};

export const deleteItemFromServer = async (id) => {
  await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  return id;
};

const mapServerResponseToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
