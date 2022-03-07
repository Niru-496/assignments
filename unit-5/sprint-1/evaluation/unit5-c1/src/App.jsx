import logo from './logo.svg';
import './App.css';
import{ useState } from 'react';
import {BookInv,PenInv,NoteInv,InkPenInv}from "./components/inventory"


function App() {
  const [totalcount,settotalCount] = useState()

  
  return (
    <div className='App'>
      <BookInv/>
      <PenInv/>
      <NoteInv/>
      <InkPenInv/>

      <div className='total'>{totalcount}</div>
    </div>
  );
}

export default App;
