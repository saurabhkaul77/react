import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let [counter1, subCounter] = useState(15)


  // let counter = 5
  const addValue = ()=>{
    console.log("value added", Math.random());
    // setCounter(counter+1)
    setCounter(counter=> counter+1)
    setCounter(counter=> counter+1)
    setCounter(counter=> counter+1)

  }

  const removeValue = ()=>{
    console.log("value removed", Math.random());
    setCounter(counter-1)
  }

  return (
    <>
    <h1>chai or react</h1>
    <h1>counter value: ${counter}</h1>

    <button onClick={addValue}>Add value: {counter}</button>
    <br/>
    <button onClick={removeValue} >Remove value: {counter}</button>

    </>
  )
}

export default App
