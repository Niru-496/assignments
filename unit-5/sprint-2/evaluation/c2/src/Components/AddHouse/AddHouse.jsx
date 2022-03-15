import axios from "axios";
import { useState } from "react";
export const AddHouse = () => {
	const [formData, setFromData] = useState({
		name: "",
		ownerName: "",
		address: "",
		areaCode: "",
		rent: "",
		bachelor: false,
		married: false,
		image: "",
	});

	const updatedData = (e) => {
		const { id, value } = e.target;
		setFromData({
			...formData,
			[id]: value,
		});
	};

	const updateCheck = (e) => {
		const { id } = e.target;
		const value = e.target.checked;
		setFromData({
			...formData,
			[id]: value,
		});
	};

	const handleAdd = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/houses", formData)
			.then(() => alert(`House is ADDED INTO TABLE`))
			.finally(() => {
				setFromData({
					name: "",
					ownerName: "",
					address: "",
					areaCode: "",
					rent: "",
					bachelor: false,
					married: false,
					image: "",
				});
			});
	};

	return (
		<div className="addHouseContainer">
			<form onSubmit={handleAdd}>
				<label>name</label>
				<input
					id="name"
					onChange={updatedData}
					type="text"
					className="name"
					value={formData.name}
					required
				/>
				<br />
				<label>ownerName</label>
				<input
					id="ownerName"
					onChange={updatedData}
					value={formData.ownerName}
					type="text"
					className="ownerName"
					required
				/>
				<br />
				<label>address</label>
				<input
					onChange={updatedData}
					id="address"
					type="text"
					className="address"
					value={formData.address}
					required
				/>
				<br />
				<label>areaCode</label>
				<input
					id="areaCode"
					onChange={updatedData}
					value={formData.areaCode}
					type="number"
					className="areaCode"
					required
				/>
				<br />
				<label>rent</label>
				<input
					id="rent"
					onChange={updatedData}
					value={formData.rent}
					type="number"
					className="rent"
					requiredd
				/>
				<br />
				<label>preferredTenant</label>
				<br />
				<label>bachelor</label>
				<input
					id="bachelor"
					checked={formData.bachelor}
					onChange={updateCheck}
					type="checkbox"
					className="bachelor"
				/>
				<br />
				<label>married</label>
				<input
					onChange={updateCheck}
					id="married"
					checked={formData.married}
					type="checkbox"
					className="married"
				/>
				<br />
				<label>image</label>
				<input
					id="image"
					onChange={updatedData}
					value={formData.image}
					type="text"
					className="image"
					required
				/>
				<br />
				<input className="submitBtn" type="submit" />
			</form>
		</div>
	);
};
