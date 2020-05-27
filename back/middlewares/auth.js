const jwt = require('jsonwebtoken');
const users = require('../controllers/users');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (users.getUserFromId(req, res, userId)) {
      console.log('auth failed')
      throw 'Invalid user ID';
    } else {
      console.log('Id verified')
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
