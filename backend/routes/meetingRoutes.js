const express = require('express')

const router = express.Router()

const {
  createMeeting,
  getMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
} = require('../controllers/meetingController')

const {
  protect,
} = require('../middleware/authMiddleware')

router
  .route('/')
  .post(protect, createMeeting)
  .get(protect, getMeetings)

router
  .route('/:id')
  .get(protect, getMeetingById)
  .put(protect, updateMeeting)
  .delete(protect, deleteMeeting)

module.exports = router