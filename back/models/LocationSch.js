const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
  
    zip: {type: int },
    
    city: { type: String},
    
    date: { type: Date, default: Date.now }
    
})

module.exports = mongoose.model('LocationSch', LocationSchema)