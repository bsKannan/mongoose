var Subject = require('./subject.model')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age: {type:Number, require : true},
    subjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}]
});

module.exports = mongoose.model('Student',StudentSchema);