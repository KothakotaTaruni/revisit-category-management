import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwt_token')
  console.log(token)

  if (!token) {
    return <Navigate to="/login"/>
  }

  return <>{children}</>
}

export default ProtectedRoute
