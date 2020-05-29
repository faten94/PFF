const express = require('express');
const app = express();
const User = require('../models/UserSch')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const dotenv = require("dotenv");
const auth = require("../middlewares/auth");

dotenv.config();
app.use(express.json());

exports.UpdateProfile = async (req, res) => {
    id =  req.body._id
    await bcrypt.hash(req.body.password, saltRounds, (err, encrypted) => {
        req.body.password = encrypted
        User.findByIdAndUpdate(id, req.body, function(err, result){
            if(err) res.send(err)
            res.json('User updated.')
        })
    })
}

exports.verifyAdmin = function (req, res, id) {
    return User.findById(id, function (err, user) {
        if(err) throw err;
        if(user.role == 'admin'){
            return 'admin'
        }
    })
}

exports.getAllProfile = (req, res) => {
    User.find(function (err, user) {
        if(err) throw err;
        res.json(user)
    })
}

exports.getProfile = (req, res) => {
    id =  req.body._id
    User.findById(id, function (err, user) {
        if(err) throw err;
        res.json(user)
    })
}