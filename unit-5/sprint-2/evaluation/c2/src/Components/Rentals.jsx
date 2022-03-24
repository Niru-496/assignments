import axios from "axios";

import {useState,useEffect} from "react";


import "./Rentals.css";

export const Rentals = () => {
  const [alldata,setAlldata] = useState([]);

  useEffect(() => {
    showData();
  },[])

  const showData=()=>{
axios.get("http://localhost:8080/houses").then((res)=>{
setAlldata(res.data)
})
  }

  const Filter1 = () => {

    setAlldata(alldata.sort((a, b) => a - b))
  }

  const Filter2 = () => {
    setAlldata(alldata.sort((a, b) => b - a))
  }

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc" onClick={Filter1}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={Filter2}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={Filter1}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={Filter2}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
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
          {alldata.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {house.preferredTenants}
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
