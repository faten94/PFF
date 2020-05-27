const express = require ('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const path = require ('path');
const auth = require('./middlewares/auth');
const users = require('./controllers/users');
const suppliers = require('./controllers/suppliers');
const dotenv = require("dotenv");
const app = express();
const connectTodatabase = require('./config/connectToDatabase')
const router = express.Router();

dotenv.config();

app.use(bodyParser.json());
app.use(cors())

connectTodatabase()

app.use('/', router);

router.post('/register', users.register);
router.post('/login', users.login);
router.post('/logout', users.logout);

router.post('/supplierRegister', suppliers.register);
router.post('/supplierLogin', suppliers.login);

app.get('/', (req, res) => {
    res.send('NeedElp baby')
})


const port = process.env.PORT || 8080;

app.listen(port, () => console.log (`Serveur lancer sur le port ${port} 🔥`));