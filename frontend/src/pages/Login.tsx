import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

import axios from 'axios'

import '../App.css'

export default function Login() {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const [errorMessage, setErrorMessage] =
    useState('')

  const { login } = useAuth()

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setLoading(true)

      setErrorMessage('')

      const { data } = await axios.post(
        'https://intellmeet-backend-kzpi.onrender.com/api/auth/login',
        {
          email,
          password,
        }
      )

      login(data)

      navigate('/dashboard')
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message ||
          'Login Failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>

        <p>
          Login to continue your AI-powered
          meetings
        </p>

        {errorMessage && (
          <p
            style={{
              color: 'red',
              marginBottom: '10px',
            }}
          >
            {errorMessage}
          </p>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading
            ? 'Signing In...'
            : 'Sign In'}
        </button>
      </div>
    </div>
  )
}