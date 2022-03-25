export const TodoItem = ({ todo, remove, toggle }) => {
	return (
		<div>
			{todo.title} - {todo.status ? "Done" : "Not Done"}
			<button onClick={() => toggle(todo.id)}></button>
			<button
				onClick={() => {
					remove(todo.id);
				}}
			>
				Remove
			</button>
		</div>
	);
};