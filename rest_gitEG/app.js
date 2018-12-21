var express = require('express');
var bodyParser = require('body-parser');
var taskController= require('./controllers/TaskController');

// var database = 
require('./config/db')
var app = express();

var port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.get('/',(req,res) => {
    res.send("hello world");
})

app
    .route("/tasks")
    .get(taskController.listAllTasks)
    .post(taskController.createNewTask);
app
    .route("/tasks/:taskid")
    .get(taskController.readTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);


app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
    
})