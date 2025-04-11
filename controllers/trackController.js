const spotifyService = require('../services/spotifyService');
const adviceService = require('../services/adviceService');
const Track = require('../models/Track');

const getTopTracksWithAdvice = async (req, res) => {
  const accessToken  = req.body.accessToken;
  const spotifyUserId = req.user.sub;
 console.log (spotifyUserId,'thisisbody')
  
  try {
    
    const topTracks = await spotifyService.getTopTracks(accessToken);
    const result = [];
    
    for (const track of topTracks) {
      (spotifyUserId,'test')
      const advice = await adviceService.getAdvice();
      
      const savedTrack = await Track.findOneAndUpdate(
        { spotifyUserId, trackId: track.id }, 
        { 
          name: track.name,
          artist: track.artists[0].name,
          advice,
        },
        { 
          new: true, 
          upsert: true 
        }
      );

      result.push(savedTrack);
    }

    res.json(result);
  } catch (err) {
    console.error('Track/Advice Error:', err.message);
    res.status(500).json({ message: 'Error fetching tracks or advice' });
  }
};

module.exports = { getTopTracksWithAdvice };
