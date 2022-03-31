import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { v4 as uuid } from "uuid";
export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (data) => {
    const payload = {
      id: uuid(),
      title: data,
      status: false,
    };
    setTodos([...todos, payload]);
  };
  const toggleStatus = (id) => {
    const updatedTodos = todos.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setTodos(updatedTodos);
  };
  const deleteItem = (id) => {
    const updatedTodos = todos.filter((el) => el.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <GroceryInput handleAdd={handleAdd} />
      {todos.map((el) => (
        <GroceryList
          el={el}
          toggleStatus={toggleStatus}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};
