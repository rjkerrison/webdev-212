// App.js
import { useState } from 'react'
import './App.css'
import BeerInfo from './components/BeerInfo'
import Counter from './components/Counter'
import MyComponent from './components/MyComponent'
import Timer from './components/Timer'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <MyComponent />
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <Counter />}
      {show && <Timer />}
      <BeerInfo />
    </div>
  )
}
export default App
