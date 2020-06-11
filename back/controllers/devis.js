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

 exports.devis = async(req, res) => 
 {

  console.log(req.body)
   
   req.body.user =  getId.getId(req, res)
   
    Devis.create({content: req.body.content,
    daterdv: req.body.startdate,
    supplier: req.body.supplierId,
    user: req.body.user,
    answer:'',
    price:''
    }, function(err,docs)
    {
       console.log(docs)
      if(!err) res.send(docs)
    })
 }

 exports.devisRes =async(req, res) => 
 {
   console.log(req.body._id)
   const id =  req.body._id;

   Devis.findByIdAndUpdate({ _id:id }, {price:req.body.price , answer:req.body.answer},function(err,result) 
    {
      if (err) 
      {
        res.send(err);
      } 
      else {
        res.json(result);
        console.log(result)
      }

    })
 }
