import { useState } from "react"

function Test(){
    const [counter , setCounter] = useState(0)

    const changer = (value) => {

        setCounter(counter+value)
    }
    return (
        <div>
            <h1> count is : {counter}</h1>
            <div className="button_div">
                <button onClick={ () => {
                    changer(1)
                } }> Add By 1</button>
                <button onClick={ () => {
                    if(counter<1){
                        return counter*0
                    }
                    changer(-1)
                } }> Remove By 1</button>
                <button onClick={ () => {
                    setCounter(counter*2)
                } }>Double count</button>
            </div>

        </div>
    )
}

export {Test}