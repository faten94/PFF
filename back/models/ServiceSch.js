const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
    
    
    jobType: {type: String}
    
})

module.exports = mongoose.model('ServiceSch', ServiceSchema)