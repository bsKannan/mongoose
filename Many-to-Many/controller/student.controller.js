var Student = require('../models/student.model');
var Subject = require('../models/subject.model');

exports.findAll = (req,res)=> {
    Student.find()
    .then(students => {
        res.send(students);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    });
}

exports.findByName = (req,res) => {
    Student.findOne({ firstname: req.params.firstname })
    .populate('subjects')
    .exec((err, student) => {
        if(err) {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Student not found with given firstname " + req.params.firstname
                });
            }
            return res.status(500).send({
                message: "Error retrieving Student with given firstname" + req.params.firstname
            })
        }
        res.send(student);
    })
}

// Find all student learnt a given subject
exports.findBySubjectId = (req, res) => {
	Student.find({ subjects : req.params.subjectId })
	.exec(function (err, students) {
		if (err){
			if(err.kind === 'ObjectId') {
				return res.status(404).send({
					message: "Student not found with given Subject Id " + req.params.subjectId
				});                
			}
			return res.status(500).send({
				message: "Error retrieving Student with given subject Id " + req.params.subjectId
			});
		}
					
		res.send(students);
    });
}