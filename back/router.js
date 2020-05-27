const express = require('express');
const users = require('./controllers/users');
const suppliers = require('./controllers/suppliers')
const app = express();
const router = express.Router();
const auth = require('./middlewares/auth');
const admin = require('./middlewares/admin');

app.use('/', router);

router.post('/register', users.register);
router.post('/login', users.login);
router.post('/logout', users.logout);
router.get('/settings', auth, users.getProfile);
router.post('/settings', auth, users.updateProfile);
router.delete('/settings', auth, users.deleteProfile);

router.get('/admin/users', auth, admin, users.getAllProfile)
router.post('/admin/users', auth, admin, users.register)
router.put('/admin/users', auth, admin, users.adminUpdateProfile)

router.post('/supplierRegister', suppliers.register);
router.post('/supplierLogin', suppliers.login);


module.exports = router;