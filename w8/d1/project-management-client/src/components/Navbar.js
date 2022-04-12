import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

  return (
    <div>
      <p>I am a Navbar</p>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Navbar
