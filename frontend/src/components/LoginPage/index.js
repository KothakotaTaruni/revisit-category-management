import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import "./index.css"

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isNotRegistered, setIsNotRegistered] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.jwtToken) {
        localStorage.setItem('jwt_token', data.jwtToken)
        setIsLoggedIn(true)
      } else if (data.message === "Invalid user") {
        setIsNotRegistered(true)
      }
      else if (data.message) {
        setError(data.message)
      }
    })
    .catch((error) => setError('Error logging in'))
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />
  }

  if(isNotRegistered){
    return <Navigate to="/"/>
  }

  return (
    <div className="login-container">
      <h1 className="heading">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label className="username">
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label className="password">
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit" className="button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  )
}

export default LoginPage
