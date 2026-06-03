const Meeting = require('../models/Meeting')

const createMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.create({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      participants: req.body.participants,
      createdBy: req.user._id,
    })

    res.status(201).json(meeting)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find({
      createdBy: req.user._id,
    })

    res.json(meetings)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const getMeetingById = async (
  req,
  res
) => {
  try {
    const meeting =
      await Meeting.findOne({
        _id: req.params.id,
        createdBy: req.user._id,
      })

    if (!meeting) {
      return res.status(404).json({
        message: 'Meeting not found',
      })
    }

    res.json(meeting)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    })

    if (!meeting) {
      return res.status(404).json({
        message: 'Meeting not found',
      })
    }

    await meeting.deleteOne()

    res.json({
      message: 'Meeting deleted',
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}


const updateMeeting = async (
  req,
  res
) => {
  try {
    const meeting =
      await Meeting.findOne({
        _id: req.params.id,
        createdBy: req.user._id,
      })

    if (!meeting) {
      return res.status(404).json({
        message: 'Meeting not found',
      })
    }

    meeting.title =
      req.body.title || meeting.title

    meeting.description =
      req.body.description ||
      meeting.description

    meeting.date =
      req.body.date || meeting.date

    meeting.participants =
      req.body.participants ||
      meeting.participants

    const updatedMeeting =
      await meeting.save()

    res.json(updatedMeeting)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}


module.exports = {
  createMeeting,
  getMeetings,
  getMeetingById,
  updateMeeting,
  deleteMeeting,
}