const mongoose = require('mongoose')

const meetingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: '',
    },

    date: {
      type: Date,
      required: true,
    },

    participants: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      default: 'Scheduled',
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    summary: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model(
  'Meeting',
  meetingSchema
)