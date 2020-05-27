const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('../models/UserSch')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const auth = require("../middlewares/auth");
const getId = require("../middlewares/getId");

dotenv.config();
app.use(express.json());


exports.register = async (req,res, next) => {
    const userExists = await User.findOne({ email: req.body.email })
    if (userExists) {
        return res.status(403).json({
            error: "This email is already used."
        });
    }
    await bcrypt.hash(req.body.password, saltRounds, (err, encrypted) => {
        req.body.password = encrypted
        const user = new User(req.body)
        user.save()
        res.status(200).json({ message: "Registration complete." });
    })
};

exports.login = (req, res) => {
    const { email, password } = req.body
    User.findOne({email}, (err, user) => {
        
        if (err || !user){
            return res.status(400).json({
                error: "Email doesn't exist"
            })
        }
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if(result == false){
                res.json({validation: false});
            }
            const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
            
            res.cookie("token", token, {expire: new Date() + 86400, httpOnly: true})
            
            const {_id, name, email} = user
            return res.json({token, user: {_id, email, name}});
        });
    });  
};

exports.logout = (req, res) => {
    res.clearCookie("token");
    return res.json({message: "Logout succesfull !"})
};

exports.getUserFromId = function (req, res, id) {
    return User.findById(id, function (err, user) {
        if(err) throw err;
    })
}

exports.getProfile = (req, res) => {
    id = getId.getId(req, res)
    User.findById(id, function (err, user) {
        if(err) throw err;
        res.json(user)
    })
}