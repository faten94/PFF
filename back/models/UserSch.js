
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({

  lastname: { type: String },

  firstname: { type: String },

  password: { type: String, required: true },
  
  address: {type: String },
  
  photo: {type: String },
  
  phone: {type: String},
  
  email: { type: String, required: true },
  
  date: { type: Date, default: Date.now }

})

module.exports = mongoose.model('UserSch', UserSchema)