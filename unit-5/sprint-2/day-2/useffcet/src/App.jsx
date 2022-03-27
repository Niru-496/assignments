import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
function App() {
	const [count, setCount] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3001/Groceries").then((res) => {
			// console.log(res.data);
			setCount(res.data);
		});
	}, [count]);

	return (
		<div className="App">
			{count.map((e) => (
				<h1 key={e.id}>{e.id} </h1>
			))}
			<h1></h1>
		</div>
	);
}

export default App;
