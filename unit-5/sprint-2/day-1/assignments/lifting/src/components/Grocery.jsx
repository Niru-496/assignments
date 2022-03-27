import {useEffect, useState} from "react"

import { Todoinput } from "./GroceryInput";
import { TodoItem } from "./GroceryList";
import { v4 as uuidv4 } from 'uuid';
import {axios} from "axios"
export const Todo = () => {
	const [todos, settodo] = useState([]);

    useEffect(()=>{
        axios.f
    })


    const addTodo = (data) => {

        const payload = {
            id :uuidv4(),
            title:data,
            status:false
        }
        settodo([...todos , payload])
    }

    const remove = (id) =>{
        const updated = todos.filter((e)=>e.id !== id)

        settodo(updated)
    }
    const toggle = (id) => {
        const updated = todos.map((e) =>
        e.id === id ? {...todos,status:!e.status} : e)
    }


	return (
		<div>
			<Todoinput addTodo={addTodo}  />
			{todos.map((e) => (
				<TodoItem todo={e}
                key ={e.id}
                remove = {remove}
                toggle = {toggle}/>
			))}
		</div>
	);
};
