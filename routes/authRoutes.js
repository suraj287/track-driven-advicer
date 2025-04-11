const express = require('express');
const { redirectToSpotify, handleSpotifyCallback } = require('../controllers/authController');
const router = express.Router();

router.get('/login', redirectToSpotify);
router.post('/callback', handleSpotifyCallback);

module.exports = router;
