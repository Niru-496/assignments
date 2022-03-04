function Test() {
    const mobOs = ["Android","Blackberry","iPhone","Windows Phone"];
    const mobManf = ["samsung","HTC","Micromax","Apple"];
    return (
        <div>
            <div>{tempContent(mobOs , "Mobile Operating System")}</div>
            <div>{tempContent(mobManf , "Mobile Manfacturer")}</div>
        </div>
    )
}

function tempContent(arr , header){
    return (
        <>
            <h1>{header}</h1>
            <ul>
                {arr.map((e) => {
                    return (
                        <li>{e}</li>
                    )
                })}
            </ul>
        </>
    )


}

export default Test