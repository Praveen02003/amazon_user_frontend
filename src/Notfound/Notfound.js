import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Notfound/Notfound.css'
export const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className="notfound">
      <h1 className="error-code">404</h1>
      <h2 className="error-text">Page Not Found</h2>
      <button className="back-btn" onClick={() => { navigate('/') }}>
        ⬅ Back to Home
      </button>
    </div>

  )
}
