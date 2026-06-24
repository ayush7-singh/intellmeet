const express = require('express')

const router = express.Router()

const {
  getMessages,
  createMessage,
} = require('../controllers/messageController')

router
  .route('/:meetingId')
  .get(getMessages)

router.route('/').post(createMessage)

module.exports = router