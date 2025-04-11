const axios = require('axios');
const qs = require('qs');

const getAccessToken = async (code) => {
  console.log(code,'aceessss')
  const data = qs.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
    client_id: process.env.SPOTIFY_CLIENT_ID,
    client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    show_dialog:true
  });

  const response = await axios.post('https://accounts.spotify.com/api/token', data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
console.log(response.data.access_token,'test123456')
  return response.data.access_token;
};

const getSpotifyUser = async (accessToken) => {
  (accessToken,'test12323')
  const response = await axios.get('https://api.spotify.com/v1/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};

const getTopTracks = async (accessToken) => {
  try {
    (accessToken,'tst123')
    const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=5', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response.data)
    return response.data.items;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

module.exports = { getAccessToken, getSpotifyUser, getTopTracks };
