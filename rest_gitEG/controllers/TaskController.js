var Task = require('../models/Task');

exports.listAllTasks = (req,res)=>{
    Task.find({},(err,task)=>{
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(task); 
    });
}

exports.createNewTask = (req,res)=> {
    var newTask = new Task(req.body);
    newTask.save((err,task) =>{
        if(err) {
            res.status(500).send(err)
        }
        res.status(200).send(task);
    });
}

exports.readTask = (req,res) => {
    Task.findById(req.params.taskid,(err,task) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(task);
    });
}

exports.updateTask = (req,res) => {
    Task.findOneAndUpdate(
        {_id:req.params.taskid},
        req.body,
        {new:true},
        (err,task)=>{
            if(err){
                res.status(500).send(err)
            }
            res.status(200).send(task)
        }
    );
;}


exports.deleteTask = (req,body) => {
    Task.remove({_id:req.params.taskid},(err,task)=> {
        if(err){
            res.status(500).send(err)
        }
        res.status(200).send(task);
    })
}