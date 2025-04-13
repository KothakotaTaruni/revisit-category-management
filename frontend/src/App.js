import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import LoginPage from "./components/LoginPage"
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignupPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
