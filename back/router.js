const express = require('express');
const users = require('./controllers/users');
const suppliers = require('./controllers/suppliers')
const app = express();
const router = express.Router();

app.use('/', router);

router.post('/register', users.register);
router.post('/login', users.login);
router.post('/logout', users.logout);

router.post('/supplierRegister', suppliers.register);
router.post('/supplierLogin', suppliers.login);

module.exports = router;