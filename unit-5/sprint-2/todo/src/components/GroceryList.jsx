export const GroceryList = ({ el, toggleStatus, deleteItem }) => {
  return (
    <>
      <div>
        {el.title}--{el.status ? "Done" : "Not done"}
        <button onClick={() => toggleStatus(el.id)}>Toggle</button>
        <button onClick={() => deleteItem(el.id)}>Delete</button>
      </div>
    </>
  );
};
