const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./UserSch')
const Supplier = require('./SupplierSch')


const CommentSchema = new Schema({
 
    content: { type: String },
    
    date: { type: Date, default: Date.now },
    
    note: { type: Number },      

    User: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserSch' }],

    Supplier: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SupplierSch' }]

    
})
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment