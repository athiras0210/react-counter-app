import React, { useState } from 'react'

function Counter() {
  //State Creation //var counter=0;
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    //alert("Button clicked")
    //increment counter value by one
    setCounter(counter + 1)
  }

  function decrementCounter() {
    if (!counter == 0) {
      setCounter(counter - 1)
    }
  }

  function resetCounter() {
    setCounter(0)
  }

  return (
    <div className='bg-light p-5 m-5 text-center text-dark'>
      <div className='m-5 p-5'>
        <h3>Counter App</h3>
        <h3>{counter}</h3>
        <button onClick={incrementCounter} className='btn btn-primary text-light shadow m-2'>Increment</button>
        <button onClick={decrementCounter} className='btn btn-danger text-light shadow m-2'>Decrement</button>
        <button onClick={resetCounter} className='btn btn-dark text-light shadow m-2'>Reset</button>
      </div>
    </div>
  )
}

export default Counter