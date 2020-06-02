const express = require('express');
const app = express();
const cors = require('cors')
const Supplier = require('../models/SupplierSch');
const supplier = express.Router()
const dotenv = require("dotenv");

supplier.use(cors())

dotenv.config();
app.use(express.json());


    console.log('blallalal')


    exports.GetAllSupplier = async(req, res) => {

            Supplier.find((err, docs)=>{
                console.log(docs)
                if(!err) res.send(docs)
                else console.log('erreur recuperation suppliet' + JSON.stringify(err,undefined,2))
            })
            console.log('je suis la')

        }
        // exports.GetAllSupplierByService = async(req, res) => {

        //     Supplier.find((err, docs)=>{
        //         console.log(docs)
        //         if(!err) res.send(docs)
        //         else console.log('erreur recuperation suppliet' + JSON.stringify(err,undefined,2))
        //     })
        //     console.log('je suis la')
