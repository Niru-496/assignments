import axios from "axios";
import { useState} from "react";

export const AddHouse = () => {
const [data,setData] = useState({
  name:"",
  ownerName:"",
  address:"",
  areaCode:"",
  rent:"",
  preferredTenants:"",
  married:"",
  image:"",


});

const handleChange=(e) => {
const {id,value} = e.target;

setData({
  ...data,
  [id]:value
})
}

const handleSubmit=(e) => {
  e.preventDefault();
  axios.post("http://localhost:8080/houses",data).then(()=>{
    alert("Success!");
  })
}
 
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input id="name" type="text" className="name" value={data.name} required onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input id="ownerName" value={data.ownerName} type="text" className="ownerName" required onChange={handleChange}/>
        <br />
        <label>address</label>
        <input id="address" value={data.address} type="text" className="address" required onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input id="areaCode" value={data.areaCode} type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input id="rent" value={data.rent} type="text" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input id="preferredTenants" checked={data.preferredTenants} type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input id="married" checked={data.married} type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input id="image" value={data.image} type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
