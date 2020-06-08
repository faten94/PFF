const express = require('express');
const app = express();
const cors = require('cors')
const Devis = require('../models/DevisSch');
const getdevis = express.Router()
const dotenv = require("dotenv");

getdevis.use(cors())

dotenv.config();
app.use(express.json());

 exports.getdevis = async(req, res) => {

  console.log(req.body)
   //console.log(req.params)
   //console.log(req.query)
   console.log("jjhjh")




   Devis.find (function(err,docs){
  if(!err) res.send(docs)

 })
 }
