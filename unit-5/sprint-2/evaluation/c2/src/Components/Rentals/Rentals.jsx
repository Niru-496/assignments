import "./Rentals.css";
import { useState, useEffect } from "react";
import axios from "axios";
export const Rentals = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState([]);
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const res = await axios.get("http://localhost:8080/houses");
		setData(res.data);
	};

	const sortById = async () => {
		let newData = data.sort((a, b) => {
			return b.id - a.id;
		});
		setData([...newData]);
	};
	const rentLow = async () => {
		let newData = data.sort((a, b) => {
			return a.rent - b.rent;
		});
		setData([...newData]);
	};

	const rentHigh = async () => {
		let newData = data.sort((a, b) => {
			return b.rent - a.rent;
		});
		setData([...newData]);
	};

	const areaLow = async () => {
		let newData = data.sort((a, b) => {
			return a.areaCode - b.areaCode;
		});
		setData([...newData]);
	};
	const areaHigh = async () => {
		let newData = data.sort((a, b) => {
			return b.areaCode - a.areaCode;
		});
		setData([...newData]);
	};

	const filterData = (val) => {
		let newData = data.filter((el) => {
			return el.address === val;
		});
		setData([...newData]);
	};

	return (
		<div className="rentalContainer">
			<div className="sortingButtons">
				<button onClick={sortById} className="sortById">
					Sort by ID
				</button>
				<button onClick={rentLow} className="sortByRentAsc">
					Rent Low to high
				</button>
				<button onClick={rentHigh} className="sortByRentDesc">
					Rent High to low
				</button>
				<button onClick={areaLow} className="sortByAreaAsc">
					Area Low to high
				</button>
				<button onClick={areaHigh} className="sortByAreaDesc">
					Area High to Low
				</button>
			</div>
			<input
				onChange={(e) => setFilter(e.target.value)}
				className="searchAddress"
				type="text"
				placeholder="Search Address"
			/>
			<button onClick={() => filterData(filter)}>Filter</button>
			<table className="table" border="1">
				<thead>
					<tr>
						<th>Sl.no.</th>
						<th>Name</th>
						<th>Owner Name</th>
						<th>Address</th>
						<th>Area Code</th>
						<th>Rent</th>
						<th>Available For</th>
						<th>Image</th>
					</tr>
				</thead>
				<tbody>
					{data.map((house, index) => {
						return (
							<tr key={house.id} className="houseDetails">
								<td className="houseId">{house.id}</td>
								<td className="houseName">{house.name} </td>
								<td className="ownersName">
									{house.ownerName}
								</td>
								<td className="address">{house.address}</td>
								<td className="areaCode">{house.areaCode}</td>
								<td className="rent">{house.rent}</td>
								<td className="preferredTenants">
									{house.bachelor
										? house.married
											? "Married and Bachelor"
											: "Bachelor"
										: "Married"}
								</td>
								<td className="houseImage">
									<img src={house.image} alt="house" />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
