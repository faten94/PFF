const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = require('./UserSch')
const supplier = require('./SupplierSch')


const CommentSchema = new Schema({
 
    content: { type: String },
    
    date: { type: Date, default: Date.now },
    
    note: { type: Number },      

    user: { type: String },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'UserSch' },

    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'SupplierSch' },

    answers: [{ text: String,
                date: { type: Date, default: Date.now }
                }] 
    
})
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment