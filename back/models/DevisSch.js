const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Payment = require('./PaymentSch')
const Supplier = require('./SupplierSch')
const Service = require('./ServiceSch')
const User = require('./UserSch')

const DevisSchema = new Schema({
 
    content: { type: String },
    
    date: { type: Date, default: Date.now },
    
    photo: {type: String },
    
    status: {type: String},
    
    daterdv: { type: String},
    
    Payment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentSch' }],

    Supplier: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SupplierSch' }],

    Service: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSch' }],

    User: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserSch' }],
})

const Devis = mongoose.model('Devis', DevisSchema)
module.exports = Devis