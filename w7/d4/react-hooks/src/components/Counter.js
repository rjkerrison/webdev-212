import React, { useEffect, useState } from 'react'

// this makes ZERO SENSE
// because we're not inside a component right now (move it)
// const [myState, setMyState] = useState('hello')

const Counter = () => {
  const [count, setCount] = useState(0)

  // this will error because we cannot have a changing number of useEffects
  // during the lifecycle of a component
  // if (count > 5) {
  //   useEffect(() => {
  //     console.log('Counter greater than 5!')
  //   }, [])
  // }

  useEffect(() => {
    console.log('Counter is mounting')
  }, []) // dependent on nothing === independent === only run when mounting

  useEffect(() => {
    console.log('Counter is updating')
  }, [count]) // dependent on count === run when count is initialised or updated

  const incrementCount = (change) => {
    setCount(count + change)
  }

  return (
    <section>
      <h2>Counter</h2>
      <p>{count}</p>
      <div className="flex-row">
        <button onClick={() => incrementCount(-1)}>-1</button>
        <button onClick={() => incrementCount(1)}>+1</button>
        <button onClick={() => incrementCount(5)}>+5</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  )
}

export default Counter
