import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(99);

  return (
    <>
   <h3>Count {value} </h3>
   <button onClick={
    ()=>{
      setValue(value + 1);
    }
   }>ADD</button>
   <button onClick={
    ()=>{
      setValue(value + 2);
    }
   }>ADD2</button>
  </>
  )
}

export default App
