import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditMeeting() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] =
    useState('')
  const [date, setDate] = useState('')
  const [participants, setParticipants] =
    useState('')

  useEffect(() => {
    const fetchMeeting = async () => {
      try {
        const userInfo = JSON.parse(
          localStorage.getItem('userInfo') ||
            'null'
        )

        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }

        const { data } = await axios.get(
          `https://intellmeet-backend-kzpi.onrender.com/api/meetings/${id}`,
          config
        )

        setTitle(data.title)
        setDescription(data.description)
        setDate(data.date.split('T')[0])
        setParticipants(
          data.participants.join(',')
        )
      } catch (error) {
        console.log(error)
      }
    }

    fetchMeeting()
  }, [id])

  const handleUpdate = async () => {
    try {
      const userInfo = JSON.parse(
        localStorage.getItem('userInfo') ||
          'null'
      )

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      await axios.put(
        `https://intellmeet-backend-kzpi.onrender.com/api/meetings/${id}`,
        {
          title,
          description,
          date,
          participants:
            participants.split(','),
        },
        config
      )

      navigate(`/meeting/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Edit Meeting</h1>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
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
          value={participants}
          onChange={(e) =>
            setParticipants(
              e.target.value
            )
          }
        />

        <button
          className="login-btn"
          onClick={handleUpdate}
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}