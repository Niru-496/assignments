import { useState } from 'react'
import logo from './logo.svg'
import {Button} from './components/Button'
 import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button padding="10px 20px" bg="#2592fd"  color="white" border="none" >Primary Button</Button>
      <Button padding="10px 20px" bg="white" color="black" border="1px solid black" >Default Button</Button>
      <Button padding="10px 20px" bg="white"  color="black" border="1px dashed black" >Dashed Button</Button> 
      <Button padding="10px 20px"bg="white"  color="black" border="none" >Text Button</Button>
      <Button padding="10px 20px"bg="white" color="blue" border="none" > <a>Link Button</a> </Button>
    </div>
  )
}

export default App
