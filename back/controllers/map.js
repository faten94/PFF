const express = require('express');
const app = express();
const cors = require('cors')
const Supplier = require('../models/SupplierSch');
const mapCoordonate = express.Router()
const dotenv = require("dotenv");

mapCoordonate.use(cors())
dotenv.config();
app.use(express.json());




exports.mapCoordonate = async(req, res)=>{

    console.log("id recuperer",req.body._id)

    Supplier.findById({_id:"5eda31d4c4f8af2590ec85fc"}, function(err,docs){
        if(!err) res.send(docs)
      
       })

}