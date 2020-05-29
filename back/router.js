const express = require('express');
const users = require('./controllers/users');
const adminUsers = require('./controllers/adminUsers');
const adminSuppliers = require('./controllers/adminSuppliers');
const settingsUsers = require('./controllers/settingsUsers');
const suppliers = require('./controllers/suppliers');
const app = express();
const router = express.Router();
const auth = require('./middlewares/auth');
const admin = require('./middlewares/admin');


app.use('/', router);

router.post('/register', users.register);
router.post('/login', users.login);
router.post('/supplierRegister', suppliers.register);
router.post('/supplierLogin', suppliers.login);

router.get('/settings', auth, settingsUsers.getProfile);
router.post('/settings', auth, settingsUsers.updateProfile);
router.delete('/settings', auth, settingsUsers.deleteProfile);
router.get('/settings/suppliers', auth, settingsUsers.getProfile);
router.post('/settings/suppliers', auth, settingsUsers.updateProfile);
router.delete('/settings/suppliers', auth, settingsUsers.deleteProfile);

router.get('/admin/users', auth, admin, adminUsers.getAllProfile)
router.post('/admin/users', auth, admin, users.register)
router.get('/admin/users/settings', auth, admin, adminUsers.getProfile)
router.post('/admin/users/settings', auth, admin, adminUsers.UpdateProfile)
router.get('/admin/supplier', auth, admin, adminSuppliers.getAllProfile)
router.post('/admin/supplier', auth, admin, users.register)
router.put('/admin/supplier', auth, admin, adminSuppliers.UpdateProfile)




module.exports = router;