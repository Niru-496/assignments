import { useEffect, useState } from "react";
import axios from "axios";
import { Tables } from "./Table";
export const Employe = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    married: false,
  });
  useEffect(() => {
    getData();
  }, []);
  const handleForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users", formData)
      .then(() =>
        setFormData({
          name: "",
          age: "",
          address: "",
          department: "",
          salary: "",
          married: false,
        })
      )
      .finally(() => {
        alert(`user ${formData.name} is created`);
        getData();
      });
  };
  console.log(data);
  const getData = () => {
    axios.get("http://localhost:3001/users").then((res) => setData(res.data));
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
    <div>
      <form onSubmit={handleForm}>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleOtherData}
        />
        <br />
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleOtherData}
        />
        <br />
        <input
          id="address"
          type="text"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleOtherData}
        />
        <br />
        <select
          id="department"
          onChange={handleOtherData}
          value={formData.department}
        >
          <option value="">-------</option>
          <option value="SDE-1">SDE-1</option>
          <option value="SDE-2">SDE-2</option>
          <option value="SDE-3">SDE-3</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-end">Back-end</option>
          <option value="Full-stack">Full-stack</option>
        </select>
        <br />
        <input
          id="salary"
          type="number"
          placeholder="Enter your salary"
          value={formData.salary}
          onChange={handleOtherData}
        />
        <br />
        <input
          type="checkbox"
          id="married"
          checked={formData.married}
          onChange={handleCheckbox}
        />

        <label htmlFor="married">married</label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Address</td>
              <td>Department</td>
              <td>Salary</td>
              <td>Marriage</td>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <Tables {...e} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
