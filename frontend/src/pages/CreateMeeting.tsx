import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function CreateMeeting() {
  const [title, setTitle] = useState('')
  const [description, setDescription] =
    useState('')
  const [date, setDate] = useState('')
  const [participants, setParticipants] =
    useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const userInfo = JSON.parse(
        localStorage.getItem('userInfo') || '{}'
      )

      await axios.post(
        'https://intellmeet-backend-kzpi.onrender.com/api/meetings',
        {
          title,
          description,
          date,
          participants:
            participants.split(','),
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )

      navigate('/dashboard')
    } catch (error) {
      console.log(error)
      alert('Failed to create meeting')
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Create Meeting</h1>

        <input
          type="text"
          placeholder="Meeting Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Participants (comma separated)"
          value={participants}
          onChange={(e) =>
            setParticipants(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={handleSubmit}
        >
          Create Meeting
        </button>
      </div>
    </div>
  )
}