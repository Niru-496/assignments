function Input_field(){

    return (
        <div>
            <label htmlFor="input">Input</label>
            <input type="text" className="add-note"  placeholder="input Field"/>
            <label htmlFor="">Title</label>
            <input type="text"  placeholder="title" className="note-title"/>


            <button id="sort-alphabetically">sort by ASC</button>
            <button id="sort-alphabetically-desc">sort by DESC</button>
        </div>
    )
}

function DisplayFun(){
    return (
        <div id="note-data">

        </div>
    )
}

export {Input_field,DisplayFun }