const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const http = require('http')
const { Server } = require('socket.io')

const connectDB = require('./config/db')

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use(
  '/api/auth',
  require('./routes/authRoutes')
)

app.use(
  '/api/meetings',
  require('./routes/meetingRoutes')
)

app.get('/', (req, res) => {
  res.send('API Running')
})

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  console.log(
    'User Connected:',
    socket.id
  )

  socket.on(
    'joinMeeting',
    (meetingId) => {
      socket.join(meetingId)

      console.log(
        `Joined meeting ${meetingId}`
      )
    }
  )

  socket.on(
    'sendMessage',
    (data) => {
      io.to(data.meetingId).emit(
        'receiveMessage',
        data
      )
    }
  )

  socket.on('disconnect', () => {
    console.log(
      'User Disconnected:',
      socket.id
    )
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})