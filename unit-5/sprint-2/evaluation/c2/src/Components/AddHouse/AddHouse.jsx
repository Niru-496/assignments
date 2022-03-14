import axios from "axios";
import { useEffect,useState } from "react";
export const AddHouse = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
		id: "",
		name: "",
		ownerName: "",
		address: "",
		areacode: "",
		rent: "",
    image:""
  });
  useEffect(() => {
		getData();
  }, []);
  const handleForm = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8080/houses", formData)
			.then(() =>
				setFormData({
					id: "",
					name: "",
					ownerName: "",
					address: "",
					areacode: "",
					rent: "",
					image: "",
				})
			)
			.finally(() => {
				alert(`user ${formData.ownerName} is created`);
				getData();
			});
  };
  console.log(data);
  const getData = () => {
		axios
			.get("http://localhost:8080/houses")
			.then((res) => setData(res.data));
  };

  const handleCheckbox = (e) => {
		const { id } = e.target;
		const value = e.target.checked;
		setFormData({
			...formData,
			[id]: value,
		});
  };
  const handleOtherData = (e) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
  };


	return (
		<div className="addHouseContainer">
			<form>
				<label>name</label>
				<input type="text" className="name" value={""} required />
				<br />
				<label>ownerName</label>
				<input value={""} type="text" className="ownerName" required />
				<br />
				<label>address</label>
				<input value={""} type="text" className="address" required />
				<br />
				<label>areaCode</label>
				<input value={""} type="text" className="areaCode" required />
				<br />
				<label>rent</label>
				<input value={""} type="text" className="rent" required />
				<br />
				<label>preferredTenant</label>
				<br />
				<label>bachelor</label>
				<input checked={""} type="checkbox" className="bachelor" />
				<br />
				<label>married</label>
				<input checked={""} type="checkbox" className="married" />
				<br />
				<label>image</label>
				<input value={""} type="text" className="image" required />
				<br />
				<input className="submitBtn" type="submit" />
			</form>
		</div>
	);
};
