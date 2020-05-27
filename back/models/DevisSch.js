const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Payment = require('./PaymentSch')
const Supplier = require('./SupplierSch')
const Service = require('./ServiceSch')


const DevisSchema = new Schema({
 
    content: { type: String },
    
    date: { type: Date, default: Date.now },
    
    photo: {type: String },
    
    statut: {type: String},
    
    daterdv: { type: String},
    
    Payment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentSch' }],

    Supplier: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SupplierSch' }],

    Service: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSch' }],
})

const Devis = mongoose.model('Devis', DevisSchema)
module.exports = Devis