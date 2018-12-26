const Subject = require('../models/subject.model.js');
 
 
exports.findAll = (req, res) => {
	Subject.find()
    .then(subjects => {
        res.send(subjects);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};