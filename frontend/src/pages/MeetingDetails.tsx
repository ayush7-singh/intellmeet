import { useEffect, useState } from 'react'
import {
  useParams,
  useNavigate,
} from 'react-router-dom'
import axios from 'axios'

export default function MeetingDetails() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [meeting, setMeeting] =
    useState<any>(null)

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
          `http://localhost:5000/api/meetings/${id}`,
          config
        )

        setMeeting(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMeeting()
  }, [id])

  if (!meeting) {
    return <h1>Loading...</h1>
  }

  return (
    <div
      style={{
        padding: '40px',
        color: 'white',
      }}
    >
      <h1>{meeting.title}</h1>

      <button
        className="create-btn"
        onClick={() =>
          navigate(
            `/edit-meeting/${meeting._id}`
          )
        }
      >
        Edit Meeting
      </button>

      <h2>Description</h2>
      <p>{meeting.description}</p>

      <h2>Date</h2>
      <p>
        {new Date(
          meeting.date
        ).toLocaleDateString()}
      </p>

      <h2>Status</h2>
      <p>{meeting.status}</p>

      <h2>Participants</h2>

      <ul>
        {meeting.participants.map(
          (
            participant: string,
            index: number
          ) => (
            <li key={index}>
              {participant}
            </li>
          )
        )}
      </ul>
    </div>
  )
}