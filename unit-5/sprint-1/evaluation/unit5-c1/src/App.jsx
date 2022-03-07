import logo from './logo.svg';
import './App.css';
import{ useState } from 'react';
import {BookInv,PenInv,NoteInv,InkPenInv,totalsum,name}from "./components/inventory"


function App() {

// const [tot,setTot] = useState(totalsum)
// setTot(name())
  return (
    <div className='App'>
      <BookInv/>
      <PenInv/>
      <NoteInv/>
      <InkPenInv/>

      <div className='total'>{totalsum}</div>
    </div>
  );
}

export default App;
