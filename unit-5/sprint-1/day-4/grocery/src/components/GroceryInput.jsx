import { useState } from "react";

function Ginput({additem}) {

    const [text,settext] = useState("")
	return (
		<>
        <input type="text" onChange={ (e) => {
            settext(e.target.value)
        } }/>
        <button onClick={ () =>{
            additem(text)
        }  }>add TODO</button>

		</>
	);
}

export { Ginput };
