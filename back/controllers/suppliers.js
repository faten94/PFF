const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Supplier = require('../models/SupplierSch');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

exports.register = async (req,res, next) => {
    const supplierExists = await Supplier.findOne({ email: req.body.email })
    if (supplierExists) {
        return res.status(403).json({
            error: "This email is already used."
        });
    }
    await bcrypt.hash(req.body.password, saltRounds, (err, encrypted) => {
        req.body.password = encrypted

        const supplier = new Supplier(req.body)
        supplier.save()
        res.status(200).json({ message: "Registration complete." });
    })
};

exports.login = (req, res) => {
    const { email, password } = req.body
    Supplier.findOne({email}, (err, supplier) => {
        
        if (err || !supplier){
            return res.status(400).json({
                error: "Email doesn't exist"
            })
        }
        bcrypt.compare(req.body.password, supplier.password, function(err, result) {
            if(result == false){
                res.json({validation: false});
            }
            const token = jwt.sign({_id: supplier._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
            
            res.cookie("token", token, {expire: new Date() + 86400})
            
            const {_id, name, email} = supplier
            return res.json({token, supplier: {_id, email, name}});
        });
    });  
};