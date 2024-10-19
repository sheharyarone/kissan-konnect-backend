const VideoCvSession = require('../models/videoCvSession');

// Controller function for creating a new video CV session
const createVideoCvSession = async (req, res) => {
  const { phone_number } = req.query;  // Get phone number from query parameters
  const question = "WHAT IS YOUR NAME ?";

  if (!phone_number) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  try {
    // Create a new video CV session document
    const newSession = new VideoCvSession({
      video_cv_session_primary_key: new VideoCvSession()._id, // Use generated ObjectID
      phone_number,
      chunks: [{ question, video_endpoint_in_aws: "" }], // Placeholder for video endpoint
    });

    await newSession.save();  // Save the document to the database

    // Return the session key (ObjectID) and question
    res.json({
      session_key: newSession.video_cv_session_primary_key,
      question,
    });
  } catch (error) {
    console.error('Error creating video CV session:', error);
    res.status(500).json({ error: 'Failed to create video CV session' });
  }
};

module.exports = {
  createVideoCvSession,
};
