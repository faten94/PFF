const express = require('express');
const users = require('./controllers/users');
const adminUsers = require('./controllers/adminUsers');
const adminSuppliers = require('./controllers/adminSuppliers');
const adminComments = require('./controllers/adminComments');
const settingsUsers = require('./controllers/settingsUsers');
const service = require("./controllers/service")
const settingsSuppliers = require('./controllers/settingsSuppliers')
const suppliers = require('./controllers/suppliers');
const adminQuotes = require('./controllers/adminQuotes')
const app = express();
const router = express.Router();
const auth = require('./middlewares/auth');
const authSupplier = require('./middlewares/authSupplier');
const admin = require('./middlewares/admin');
const service = require('./controllers/service');
const comments = require('./controllers/comments')


app.use('/', router);
// Register Login Users
router.post('/register', users.register);
router.post('/login', users.login);

//Register Login Suppliers
router.post('/supplierRegister', suppliers.register);
router.post('/supplierLogin', suppliers.login);

//Settings Users
router.get('/settings', auth, settingsUsers.getProfile);
router.post('/settings', auth, settingsUsers.updateProfile);
router.delete('/settings', auth, settingsUsers.deleteProfile);

//Settings Suppliers
router.get('/settings/suppliers/:supplierId', settingsSuppliers.getProfile);
router.post('/settings/suppliers', authSupplier, settingsSuppliers.updateProfile);
router.delete('/settings/suppliers', authSupplier, settingsSuppliers.deleteProfile);

//comments supplier
router.get('/suppliers/comments/:supplierId', comments.getCommentsbySupplier);


//ADMIN
    //ADMIN USER
router.get('/admin/users', auth, admin, adminUsers.getAllProfile)
router.post('/admin/users', auth, admin, users.register)
router.get('/admin/users/settings/:userId', auth, admin, adminUsers.getProfile)
router.post('/admin/users/settings/:userId', auth, admin, adminUsers.updateProfile)

    //ADMIN SUPPLIER
router.get('/admin/suppliers', auth, admin, adminSuppliers.getAllProfile)
router.post('/admin/supplier', auth, admin, users.register)
router.put('/admin/supplier', auth, admin, adminSuppliers.updateProfile)
router.get('/admin/supplier/settings/:supplierId', auth, admin, adminSuppliers.getProfile)
router.post('/admin/supplier/settings/:supplierId', auth, admin, adminSuppliers.updateProfile)

    //ADMIN QUOTE
router.get('/admin/quotes', auth, admin, adminQuotes.getAllQuotes)
router.get('/admin/quotes/settings/', auth, admin, adminQuotes.getQuote)
//router.post('/admin/quotes/settings/', auth, admin, adminQuotes.createQuote)
router.put('/admin/quotes/settings/', auth, admin, adminQuotes.updateQuote)

    // ADMIN COMMENT
router.post('/comment', auth, adminComments.createComment)
router.get('/admin/comments', auth, admin, adminComments.getAllComments)
router.get('/admin/comments/settings/:commentId', auth, admin, adminComments.getComment)
router.post('/admin/comments/settings/:commentId', auth, admin, adminComments.updateComment)

router.get('/service', service.GetAllSupplier)
router.get('/services', service.GetAllSupplierByService)

module.exports = router;