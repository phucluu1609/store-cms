import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ isAuth, element: Component }) {
  if (isAuth) {
    return Component
  } else {
    return <Navigate to="/login" replace />
  }
}
export default ProtectedRoute
