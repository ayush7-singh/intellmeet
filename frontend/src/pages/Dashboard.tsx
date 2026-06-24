import '../App.css'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

import { useEffect, useState } from 'react'

import axios from 'axios'

import {
  FaVideo,
  FaChartLine,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa'

export default function Dashboard() {
  const { logout } = useAuth()

  const navigate = useNavigate()

  const [meetings, setMeetings] =
    useState<any[]>([])

  const upcomingMeetings =
    meetings.filter(
      (meeting) =>
        new Date(meeting.date) >
        new Date()
    ).length

  const completedMeetings =
    meetings.filter(
      (meeting) =>
        meeting.status === 'Completed'
    ).length

  const totalParticipants =
    new Set(
      meetings.flatMap(
        (meeting) =>
          meeting.participants || []
      )
    ).size

  useEffect(() => {
    const fetchProfile = async () => {
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
          'http://localhost:5000/api/auth/profile',
          config
        )

        console.log('Profile:', data)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchMeetings = async () => {
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
          'http://localhost:5000/api/meetings',
          config
        )

        setMeetings(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProfile()
    fetchMeetings()
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const deleteMeeting = async (
    meetingId: string
  ) => {
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

      await axios.delete(
        `https://intellmeet-backend-kzpi.onrender.com/api/meetings/${meetingId}`,
        config
      )

      setMeetings(
        meetings.filter(
          (meeting) =>
            meeting._id !== meetingId
        )
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>IntellMeet</h2>

        <ul>
          <li>
            <FaChartLine /> Dashboard
          </li>

          <li>
            <FaVideo /> Meetings
          </li>

          <li>
            <FaUsers /> Team
          </li>

          <li>
            <FaCog /> Settings
          </li>

          <li onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1>Dashboard Overview</h1>

        <button
          className="create-btn"
          onClick={() =>
            navigate('/create-meeting')
          }
        >
          Create Meeting
        </button>

        <div className="stats-grid">
          <div className="stat-card">
            <h2>{meetings.length}</h2>
            <p>Total Meetings</p>
          </div>

          <div className="stat-card">
            <h2>{upcomingMeetings}</h2>
            <p>Upcoming Meetings</p>
          </div>

          <div className="stat-card">
            <h2>{completedMeetings}</h2>
            <p>Completed Meetings</p>
          </div>

          <div className="stat-card">
            <h2>{totalParticipants}</h2>
            <p>Total Participants</p>
          </div>
        </div>

        <div className="dashboard-table">
          <h2>Recent Meetings</h2>

          <table>
            <thead>
              <tr>
                <th>Meeting</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {meetings.map(
                (meeting: any) => (
                  <tr key={meeting._id}>
                    <td>
                      <button
                        onClick={() =>
                          navigate(
                            `/meeting/${meeting._id}`
                          )
                        }
                      >
                        {meeting.title}
                      </button>
                    </td>

                    <td>
                      {new Date(
                        meeting.date
                      ).toLocaleDateString()}
                    </td>

                    <td>
                      {meeting.status}
                    </td>

                    <td>
                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteMeeting(
                            meeting._id
                          )
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}