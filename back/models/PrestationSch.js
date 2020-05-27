const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Payment = require('./PaymentSch')
const Supplier = require('./SupplierSch')
const Service = require('./ServiceSch')

const PrestationSchema = new Schema({
 
    name: { type: String },
    
    date: { type: Date, default: Date.now },

    price: { type: Number },	
    
        
    Payment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PaymentSch' }],

    Supplier: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SupplierSch' }],

	Service: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSch' }]
 
})

const Prestation = mongoose.model('Prestation', PrestationSchema)
module.exports = Prestation