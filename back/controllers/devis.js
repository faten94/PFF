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

 exports.devis = async(req, res) => {

  console.log(req.body)
   //console.log(req.params)
   //console.log(req.query)
   req.body.user =  getId.getId(req, res)
  Devis.create({content: req.body.content,
  daterdv: req.body.startdate,
  supplier: req.body.supplierId,
  user: req.body.user,
  }, function(err,docs){
   console.log(docs)
   if(!err) res.send(docs)
   })
 }

 exports.getAllDevis = (req, res) => {
     Devis.find(function (err, comment) {
         if(err) throw err;
         res.json(comment);
     })
 }

 exports.getDevissbySupplier = (req, res) => {
     Devis.find({supplier: req.params.supplierId})
        .exec((err, commentaire) => {
         if (err){
             return res.status(400).json({
                 error: err
             })
         }
         console.log(commentaire)
         res.json(commentaire);
     });
 };
