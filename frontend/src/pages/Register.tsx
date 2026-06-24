import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { useAuth } from '../context/AuthContext'

import '../App.css'

export default function Register() {
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const { login } = useAuth()

  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      setLoading(true)

      const { data } = await axios.post(
        'https://intellmeet-backend-kzpi.onrender.com/api/auth/register',
        {
          name,
          email,
          password,
        }
      )

      login(data)

      navigate('/dashboard')
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          'Registration Failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Create Account</h1>

        <p>
          Start managing smarter AI meetings
        </p>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
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
          onClick={handleRegister}
        >
          {loading ? 'Loading...' : 'Register'}
        </button>
      </div>
    </div>
  )
}