const spotifyService = require('../services/spotifyService');
const { generateJWT } = require('../utils/jwt');

const redirectToSpotify = (req, res) => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI } = process.env;
  const scope = 'user-top-read';

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${scope}`;
  res.redirect(authUrl);
};

const handleSpotifyCallback = async (req, res) => {
  (req)
  const { code } = req.body;
  console.log(req.body,code,'test1234')
  
  try {
    const { code } = req.body;
    const accessToken = await spotifyService.getAccessToken(code);
    const userData = await spotifyService.getSpotifyUser(accessToken);
    console.log(userData,'testUserdata')
    const spotifyUserId = userData.id;
    console.log(spotifyUserId,'test12345678')

    const jwtToken = generateJWT(spotifyUserId);
    res.json({ token: jwtToken, accessToken });
  } catch (err) {
    console.error('Spotify Auth Error:', err.message);
    res.status(500).json({ message: 'Spotify authentication failed' });
  }
};

module.exports = { redirectToSpotify, handleSpotifyCallback };
