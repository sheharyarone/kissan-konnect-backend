const express = require('express');
const router = express.Router();
const { createVideoCvSession } = require('../controllers/sessionController');

// Route for creating a new video CV session
router.get('/video_cv_session', createVideoCvSession);

module.exports = router;
