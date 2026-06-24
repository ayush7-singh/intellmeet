import {
  useEffect,
  useState,
} from 'react'

import { useParams } from 'react-router-dom'

import axios from 'axios'

import socket from '../socket'

export default function Chat() {
  const { id } = useParams()

  const [message, setMessage] =
    useState('')

  const [messages, setMessages] =
    useState<any[]>([])

  useEffect(() => {
    if (!id) return

    socket.emit('joinMeeting', id)

    const loadMessages = async () => {
      try {
        const { data } =
          await axios.get(
            `https://intellmeet-backend-kzpi.onrender.com/api/messages/${id}`
          )

        setMessages(data)
      } catch (error) {
        console.log(error)
      }
    }

    loadMessages()

    socket.on(
      'receiveMessage',
      (data) => {
        setMessages((prev) => [
          ...prev,
          data,
        ])
      }
    )

    return () => {
      socket.off('receiveMessage')
    }
  }, [id])

  const sendMessage = async () => {
    if (!message) return

    const userInfo = JSON.parse(
      localStorage.getItem(
        'userInfo'
      ) || 'null'
    )

    const newMessage = {
      meetingId: id,
      sender:
        userInfo?.name ||
        userInfo?.email ||
        'User',
      text: message,
    }

    try {
      await axios.post(
        'https://intellmeet-backend-kzpi.onrender.com/api/messages',
        newMessage
      )

      socket.emit(
        'sendMessage',
        newMessage
      )

      setMessage('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      style={{
        padding: '20px',
        color: 'white',
      }}
    >
      <h1>Meeting Chat</h1>

      <div
        style={{
          minHeight: '300px',
          border: '1px solid gray',
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        {messages.map(
          (msg, index) => (
            <div key={index}>
              <strong>
                {msg.sender}
              </strong>
              : {msg.text}
            </div>
          )
        )}
      </div>

      <input
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
        placeholder="Type message..."
      />

      <button
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  )
}