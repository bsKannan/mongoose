var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SubjectSchema = mongoose.Schema({
    code: String,
    name: String
})

module.exports = mongoose.model('Subject', SubjectSchema);
