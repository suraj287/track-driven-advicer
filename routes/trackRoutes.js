const express = require('express');
const { getTopTracksWithAdvice } = require('../controllers/trackController');
const jwtAuth = require('../middleware/jwtAuth.js');
const router = express.Router();

router.post('/tracks',jwtAuth, getTopTracksWithAdvice);

module.exports = router;
