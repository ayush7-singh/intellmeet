const Message = require('../models/Message')

const getMessages = async (
  req,
  res
) => {
  try {
    const messages =
      await Message.find({
        meetingId: req.params.meetingId,
      })

    res.json(messages)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const createMessage = async (
  req,
  res
) => {
  try {
    const message =
      await Message.create({
        meetingId: req.body.meetingId,
        sender: req.body.sender,
        text: req.body.text,
      })

    res.status(201).json(message)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  getMessages,
  createMessage,
}