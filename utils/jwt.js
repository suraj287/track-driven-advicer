const jwt = require('jsonwebtoken');

const generateJWT = (spotifyUserId) => {
  return jwt.sign({ sub: spotifyUserId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

module.exports = { generateJWT };