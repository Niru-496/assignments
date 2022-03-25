import { useState } from "react";
export const Todoinput = ({ addTodo }) => {
	const [text, Settext] = useState("");

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					Settext(e.target.value);
				}}
			/>

			<button
				onClick={() => {
					addTodo(text)
				}}

			>
				add
			</button>
		</div>
	);
};
