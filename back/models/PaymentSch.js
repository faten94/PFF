const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaymentSchema = new Schema({
 
    date: { type: Date, default: Date.now },
    
    price: {type: Float },
    
    devis: { type: String},
    
    statut: {type: String},
    
})

module.exports = mongoose.model('PaymentSch', PaymentSchema)