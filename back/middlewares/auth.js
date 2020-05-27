const jwt = require('jsonwebtoken');
const users = require('../controllers/users');
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
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
