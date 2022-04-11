import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <p>I am a Navbar</p>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}

export default Navbar
