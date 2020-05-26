const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  
    zip: {type: Number },
    
    city: { type: String},
    
    date: { type: Date, default: Date.now }
    
})

Const Location = mongoose.model('Location', LocationSchema)
module.exports = Location