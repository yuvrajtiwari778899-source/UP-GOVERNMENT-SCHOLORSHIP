import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Status from './pages/Status.jsx'
import { getSession } from './auth.js'

const Private = ({ children }) => (getSession() ? children : <Navigate to="/login" replace />)

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
      <Route path="/status" element={<Private><Status /></Private>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
