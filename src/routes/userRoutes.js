// src/routes/userRoutes.js
const express = require('express');
const { loginOrSignup } = require('../controllers/userController');

const router = express.Router();

// POST /api/users/login - for both login and signup using only phone number
router.post('/login', loginOrSignup);

module.exports = router;
