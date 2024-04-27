import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, newCounter] = useState(0)

  const addValue = () =>{
    console.log("clicked", counter);
    counter = counter + 1
    newCounter(counter)
  }


  const removeValue = () =>{
    counter = counter -1
    newCounter(counter)
  }

  const back = () =>{
    counter = 0
    newCounter(counter)
  }


  return (
    <>
     <div className='container'>


      <div className='main_body'>
       
        <h1>Counter value: {counter} </h1>
      
        <div className="btn">
        <button 
        onClick={removeValue}
        >-</button>

        <button  id='reset'
        onClick={back}
        >Reset</button>

        <button 
        onClick={addValue}
        >+</button>
        </div>



      </div>


     </div>
    </>
  )
}

export default App
