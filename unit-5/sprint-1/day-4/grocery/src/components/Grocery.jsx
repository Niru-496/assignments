import { useState } from "react";
import { Ginput } from "./GroceryInput";
import { nanoid } from "nanoid";
import { Glist } from "./GroceryList";

function Grocery() {
	const [Item, setItem] = useState([]);

	const additem = (data) => {
		const payload = {
			id: nanoid(),
			item: data,
			status: false,
		};
        console.log(payload.id);
		setItem([...Item, payload]);
	};


    const Toggle = (id) => {
        const item = Item.map((e)=>
        e.id === id ? {...e, status : !e.status} );

    }
	return (
		<div>
			<Ginput additem={additem} />

			{Item.map((e) => (
				<Glist e={e} key = {e.id}/>
			))}
		</div>
	);
}

export { Grocery };
