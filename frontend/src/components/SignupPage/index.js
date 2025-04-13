import React, { useState } from 'react'
import {Navigate} from "react-router-dom"
import "./index.css"

function SignupPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const userData = { username, email, password }
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt_token', data.token)
          setRedirect(true)
        } else if (data.message === "User already exists"){
          setRedirect(true)
        }
        else {
          setError(data.message)
        }
      })
      .catch((error) => setError(error.message))
  }

  if (redirect){
    return <Navigate to="/login"/>
  }

    return(
      <div className="signup-container">
          <h1 className="heading">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label className="username">
              Username:
              <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br />
            <label className="email">
              Email:
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br />
            <label className="password">
              Password:
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br/>
            <button type="submit" className="button">Sign Up</button>
            {error && <p className="error-message">{error}</p>}
          </form>
      </div>
    )
}

export default SignupPage