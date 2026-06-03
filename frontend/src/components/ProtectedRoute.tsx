import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element
}) {
  const user = JSON.parse(
    localStorage.getItem('userInfo') || 'null'
  )

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}