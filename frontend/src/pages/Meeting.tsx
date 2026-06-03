import '../App.css'

import {
  FaMicrophone,
  FaVideo,
  FaDesktop,
  FaPhone,
} from 'react-icons/fa'

export default function Meeting() {
  return (
    <div className="meeting-room-page">
      <div className="meeting-room-header">
        <h1>Live Meeting Room</h1>

        <button className="end-call">
          End Meeting
        </button>
      </div>

      <div className="meeting-layout">
        <div className="meeting-videos">
          <div className="video-grid">
            <div className="video-box">
              <img src="https://i.pravatar.cc/300?img=11" />
            </div>

            <div className="video-box">
              <img src="https://i.pravatar.cc/300?img=12" />
            </div>

            <div className="video-box">
              <img src="https://i.pravatar.cc/300?img=13" />
            </div>

            <div className="video-box">
              <img src="https://i.pravatar.cc/300?img=14" />
            </div>
          </div>

          <div className="controls">
            <button>
              <FaMicrophone />
            </button>

            <button>
              <FaVideo />
            </button>

            <button>
              <FaDesktop />
            </button>

            <button className="end-call">
              <FaPhone />
            </button>
          </div>
        </div>

        <div className="meeting-chat">
          <h2>Meeting Chat</h2>

          <div className="chat-box">
            <p>
              <strong>Rahul:</strong> Deployment completed.
            </p>

            <p>
              <strong>Priya:</strong> AI summary generated.
            </p>

            <p>
              <strong>John:</strong> Client approved changes.
            </p>
          </div>

          <input
            type="text"
            placeholder="Send message..."
          />
        </div>
      </div>
    </div>
  )
}