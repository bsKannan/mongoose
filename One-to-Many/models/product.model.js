var Company = require('../models/company.model');

var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var ProductSchema = mongoose.Schema({
    code:String,
    name:String,
    details:String,
    company: {type: Schema.Types.ObjectId, ref: 'Company'}
})

module.exports = mongoose.model('Product',ProductSchema);

