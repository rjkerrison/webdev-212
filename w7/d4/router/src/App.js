import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import EyeLiners from './pages/EyeLiners'
import Films from './pages/Films'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/eyeliners">Eyeliners</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/eyeliners" element={<EyeLiners />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
