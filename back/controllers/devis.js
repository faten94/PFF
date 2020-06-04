const express = require('express');
const app = express();
const cors = require('cors')
const  Devis= require('../models/DevisSch');
const devis = express.Router()
const dotenv = require("dotenv");
const getId = require("../middlewares/getId");

devis.use(cors())
dotenv.config();
app.use(express.json());

 console.log('blallalal')
 exports.devis = async(req, res) => {

  console.log(req.body)
   //console.log(req.params)
   //console.log(req.query)
Devis.create({content: req.body.content, daterdv: req.body.startdate, supplier: req.body.supplierId}, function(err,docs){
   console.log(docs)
   if(!err) res.send(docs)



   })


 }
