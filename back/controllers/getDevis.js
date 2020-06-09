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

  console.log("je suis la ", req.body.params)
  let id = req.body.params

   Devis.find ({supplier:id},function(err,docs){
  if(!err) res.send(docs)
  console.log(docs)

 })
 }
