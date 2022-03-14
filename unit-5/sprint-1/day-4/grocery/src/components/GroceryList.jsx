function Glist({e , Toggle}) {
    return <div>
        {e.item}     {e.status ? "Done" : "Not Done"}
        <button onClick={()=>{
            Toggle(e.id)
        }}> Toggle</button>
        <button></button>
    </div>
}

export { Glist };
