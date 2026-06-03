import {
  useEffect,
  useState,
} from 'react'

import socket from '../socket'

export default function Chat() {
  const [message, setMessage] =
    useState('')

  const [messages, setMessages] =
    useState<string[]>([])

  useEffect(() => {
    socket.on(
      'receiveMessage',
      (message) => {
        setMessages((prev) => [
          ...prev,
          message,
        ])
      }
    )

    return () => {
      socket.off('receiveMessage')
    }
  }, [])

  const sendMessage = () => {
    if (!message) return

    socket.emit(
      'sendMessage',
      message
    )

    setMessage('')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Meeting Chat</h1>

      <div>
        {messages.map(
          (msg, index) => (
            <p key={index}>
              {msg}
            </p>
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
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  )
}