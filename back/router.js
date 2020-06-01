const express = require('express');
const users = require('./controllers/users');
const adminUsers = require('./controllers/adminUsers');
const adminSuppliers = require('./controllers/adminSuppliers');
const settingsUsers = require('./controllers/settingsUsers');
const settingsSuppliers = require('./controllers/settingsSuppliers')
const suppliers = require('./controllers/suppliers');
const app = express();
const router = express.Router();
const auth = require('./middlewares/auth');
const authSupplier = require('./middlewares/authSupplier');
const admin = require('./middlewares/admin');


app.use('/', router);

router.post('/register', users.register);
router.post('/login', users.login);
router.post('/supplierRegister', suppliers.register);
router.post('/supplierLogin', suppliers.login);

router.get('/settings', auth, settingsUsers.getProfile);
router.post('/settings', auth, settingsUsers.updateProfile);
router.delete('/settings', auth, settingsUsers.deleteProfile);
router.get('/settings/suppliers', authSupplier, settingsSuppliers.getProfile);
router.post('/settings/suppliers', authSupplier, settingsSuppliers.updateProfile);
router.delete('/settings/suppliers', authSupplier, settingsSuppliers.deleteProfile);

router.get('/admin/users', auth, admin, adminUsers.getAllProfile)
router.post('/admin/users', auth, admin, users.register)
router.get('/admin/users/settings/:userId', auth, admin, adminUsers.getProfile)
router.post('/admin/users/settings/:userId', auth, admin, adminUsers.updateProfile)
router.get('/admin/supplier', auth, admin, adminSuppliers.getAllProfile)
router.post('/admin/supplier', auth, admin, users.register)
router.put('/admin/supplier', auth, admin, adminSuppliers.UpdateProfile)

// router.param("userId", users.getUserFromId);

// router.param("userId",function(req, res, next, id){
//     console.log('router.param id'+id)
//     req.user =  users.getUserFromId(id)
//     console.log('router.param req.user'+req.user)
//     next()
// });

module.exports = router;