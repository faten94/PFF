const jwt = require('jsonwebtoken');
const adminUsers = require('../controllers/adminUsers')
const dotenv = require("dotenv");
dotenv.config();

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken._id;
    
    if (!await adminUsers.verifyAdmin(req, res, userId)) {
      res.json('Warning, you are not an admin')
    } else {
      console.log('Admin role verified')
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
