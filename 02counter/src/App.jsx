import { useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let  [counter, setCounter] = useState(5)
  // let counter = 5
 const addValue=()=>{
  
  counter = counter + 1
  setCounter(counter)
  // setCounter(counter +1) another method
   
 }

 const removeValue=()=>{
  // counter = counter -1
  if (counter > 0) {       // only decrease if counter > 0
      setCounter(counter - 1)
    }

 }
 

  return (
    <>
    <h1>Harsh aur react</h1>
    <h2>counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <br></br><br></br>
    <button
    onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
