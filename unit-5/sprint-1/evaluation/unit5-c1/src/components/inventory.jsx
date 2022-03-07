import { useState } from 'react';


let totalsum = (13+10+44+78);
// let [total, settotal] = useState()



function name(value) {
    return totalsum = totalsum+(value);
}
const BookInv = () => {
    const [BooksCount, setBooksCount] = useState(13)
    const changerB = (value) => {
        setBooksCount(BooksCount+value)
        // totalsum = totalsum+(value);
        // console.log(totalsum);
    }
    return (
        <div className="items">
            <span>Books:</span>
            <button className="addBook" onClick={() => {
                changerB(1)
                name(1)
            }} >
                +
            </button>
            <button className="remBook" onClick={() => {
                changerB(-1)
                name(-1)
            }}>
                -
            </button>
            <span className="totalBooks">{BooksCount}</span>
        </div>
    )
}

const NoteInv = () => {
    const [noteCount,setnoteCount] = useState(44)
    const changern = (value) => {
        setnoteCount(noteCount+value)
        // totalsum = totalsum+(value);
    }
    return (
        <div className="items">
            <span>NoteBooks:</span>
            <button className="addNotebook" onClick={() => {
                changern(1)
                name(1)
            }} >
                +
            </button>
            <button className="remNotebook" onClick={() => {
                changern(-1)
                name(-1)
            }}>
                -
            </button>
            <span className="totalNotebooks">{noteCount}</span>
        </div>
    )
}


const PenInv = () => {
    const [penCount, setpenCount] = useState(10)
    const changerP = (value) => {
        setpenCount(penCount+value)
        // totalsum = totalsum+(value);
    }
    return (
        <div className="items">
            <span>Pens:</span>
            <button className="addPen" onClick={() => {
                changerP(1)
                name(1)
            }} >
                +
            </button>
            <button className="remPen" onClick={() => {
                changerP(-1)
                name(-1)
            }}>
                -
            </button>
            <span className="totalPens">{penCount}</span>
        </div>
    )
}


const InkPenInv = () => {
    const [inkpenCount, setinkpenCount] = useState(78)
    const changerP = (value) => {
        setinkpenCount(inkpenCount+value)

        // totalsum = totalsum+(value);
    }
    return (
        <div className="items">
            <span>InkPens:</span>
            <button className="addInkpen" onClick={() => {
                changerP(1)
                name(1)
            }} >
                +
            </button>
            <button className="remInkpen" onClick={() => {
                changerP(-1)
                name(-1)
            }}>
                -
            </button>
            <span className="totalInkpens">{inkpenCount}</span>
        </div>
    )
}





export {BookInv,PenInv,NoteInv,InkPenInv,totalsum,name}