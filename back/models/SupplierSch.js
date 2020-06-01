const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Service = require('./ServiceSch')


const SupplierSchema = new Schema({
 
    lastname: { type: String, required: true },

    firstname: { type: String, required: true },

    email: { type: String, required: true },

    password: { type: String, required: true },
      
    photo: {type: String },

    typesupplier: {type :String , required: true},

    siret :{type :Number},

    address: {type: String , required: true },

    zip: {type: Number , required: true },
    
    city: { type: String , required: true},

    phone: {type: String , required: true},
    
    expertise: {type: String},

    date: { type: Date, default: Date.now },
    
    location: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LocationSch' }],

    service: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ServiceSch' }]
})

const Supplier = mongoose.model('Supplier', SupplierSchema)
module.exports = Supplier