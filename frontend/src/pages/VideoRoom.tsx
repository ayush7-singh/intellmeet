import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import socket from '../socket'

export default function VideoRoom() {
  const { id } = useParams()

  const userVideo =
    useRef<HTMLVideoElement>(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        if (userVideo.current) {
          userVideo.current.srcObject =
            stream
        }

        socket.emit(
          'join-video-room',
          id
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <div
      style={{
        padding: '20px',
        color: 'white',
      }}
    >
      <h1>Video Meeting Room</h1>

      <video
        playsInline
        muted
        ref={userVideo}
        autoPlay
        style={{
          width: '500px',
          border: '2px solid white',
        }}
      />
    </div>
  )
}