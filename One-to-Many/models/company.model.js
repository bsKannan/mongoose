var Product = require('../models/product.model')

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
    name: String,
    street: String,
    phone: String,
    products : [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

module.exports = mongoose.model("Company", CompanySchema);