const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ status: 401, message: 'Cannot authenticate. Kindly register or log in.' });
  }

  const token = authHeader.split(' ')[1];
  
console.log(token,'testtoken')
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload,'test123')
    req.user = payload;
    next();
  } catch (error) {
    return res.status(403).json({ status: 403, message: 'Invalid or expired token.' });
  }
};
