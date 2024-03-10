import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const handleInc = () => {
    counter < 20 ?
    setCounter(counter+1) : counter
  }

   const handleDec = () => {
    counter > 0 ?
    setCounter(counter-1) : counter
  }

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={handleInc}>Increament</button>
      <button onClick={handleDec}>decreament</button>
    </>
  )
}

export default App
