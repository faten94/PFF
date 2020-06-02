const mongoose = require('mongoose')
const Schema = mongoose.Schema
const payment = require('./PaymentSch')
const supplier = require('./SupplierSch')
const service = require('./ServiceSch')


const DevisSchema = new Schema({
 
    content: { type: String },
    
    date: { type: Date, default: Date.now },
    
    photo: {type: String },
    
    statut: {type: String},
    
    daterdv: { type: String},
    
    payment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentSch' }],

    supplier: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SupplierSch' }],

    service: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSch' }],
})

const Devis = mongoose.model('Devis', DevisSchema)
module.exports = Devis