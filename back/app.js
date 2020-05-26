const express = require ('express');
const cors =require('cors')
const bodyParser = require("body-parser");
const path = require ('path');
const app = express();
const connectTodatabase = require('./config/connectToDatabase')

app.use(bodyParser.json());
app.use(cors())

connectTodatabase()

app.get('/', (req, res) => {
    res.send('NeedElp baby')
})


const port = process.env.PORT || 8080;

app.listen(port, () => console.log (`Serveur lancer sur le port ${port} 🔥`));