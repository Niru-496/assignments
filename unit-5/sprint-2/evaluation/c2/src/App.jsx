import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
	const [Rent, setRent] = useState(true);
	const [Form, setForm] = useState(false);
	const toggle = () => {
		setRent(!Rent);
		setForm(!Form);
	};
	return (
		<div className="App">
			<button onClick={toggle} className="toggleForm">
				{/* Show text Add House or Show Rentals based on state */}
				{Form ? "Show Rentals" : "Add House"}
			</button>
			{Rent ? <Rentals /> : ""}
			{Form ? <AddHouse /> : ""}
			<br />
		</div>
	);
}

export default App;
