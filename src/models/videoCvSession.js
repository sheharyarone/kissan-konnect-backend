const mongoose = require('mongoose');

const videoCvSessionSchema = new mongoose.Schema({
  video_cv_session_primary_key: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId for the session key
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  chunks: [
    {
      question: {
        type: String,
        required: true,
      },
      video_endpoint_in_aws: {
        type: String,
        required: false, // Make this field optional
      },
    },
  ],
});

// Create the model
const VideoCvSession = mongoose.model('VideoCvSession', videoCvSessionSchema);

module.exports = VideoCvSession;
