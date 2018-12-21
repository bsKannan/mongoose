var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    taskName:{
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Tasks",TaskSchema);