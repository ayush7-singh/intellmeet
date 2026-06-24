import { io } from 'socket.io-client'

const socket = io(
  'https://intellmeet-backend-kzpi.onrender.com'
)

export default socket