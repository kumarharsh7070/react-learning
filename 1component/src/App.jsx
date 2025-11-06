import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'
function App() {
  return (

      <div>
        <Navbar />
        <br></br>
        <Card />
        <br></br>
        <Card name="kumar harsh" role="full stac" />
        <br></br>
        <Card name="rishu"/>
  
    </div>
  )
}


export default App
