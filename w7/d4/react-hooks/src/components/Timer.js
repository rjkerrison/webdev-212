// src/components/02-use-state-loop/Timer.js

import React, { useEffect, useState } from 'react'

function Timer() {
  const [count, setCount] = useState(0)

  // useEffect will run (by default) only on mounting (initial render)
  useEffect(
    () => {
      let timeoutId = setTimeout(() => {
        // causes a re-render
        // console.log('updating timer', count + 1)

        // triggers an update where the value of count will be changed
        setCount(count + 1)

        // this will be the PREVIOUS VALUE of count,
        // not the new one (from after setCount)
        // console.log(count)
      }, 1000)
    },
    // rerun when count updates (can be any state variables or props)
    [count]
  )

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  )
}

export default Timer
