var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var subjects = require('./controller/subject.controller');
var students = require('./controller/student.controller');

var Subject = require('./models/subject.model');
var Student = require('./models/student.model');
var config = require('./config/db');

mongoose.Promise = global.Promise;
mongoose.connect(config.db).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );


var app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 4001;

app.get('/api',(req,res)=>{
    res.send("Api is working");
})

app.get('/api/data/init',(req,res)=>{
     var math = new Subject({
         code: "M-01",
         name: "Mathematics"
     });

     var computer = new Subject({
         code: "C-02",
         name: "Computer"
     });

     math.save((err)=> {
         if(err) return console.error(err.stack);
         console.log("Maths is added");
     })

     computer.save((err)=> {
         if(err) return console.error(err.stack)
         console.log("Computer is added")
     });

     var kannan = new Student({
         firstname: "kannan",
         lastname: "sridhar",
         age: 25
     });
     kannan.subjects.push(math._id,computer._id);

     var fire = new Student({
         firstname: "fire",
         lastname: "water",
         age: 26
     })
     fire.subjects.push(math._id,computer._id);

     kannan.save((err)=> {
         if(err) return console.error(err.stack);
         console.log("kannan is added");
     });
     fire.save((err)=>{
        if(err) return console.error(err.stack);
        console.log("fire is added")
     });
     res.send("Done initial Data!");
});


app.get('/api/subjects',subjects.findAll);

app.get('/api/students',students.findAll);

app.get('/api/students/:firstname',students.findByName);

app.get('/api/students/subject/:subjectId',students.findBySubjectId)



app.listen(port,()=>{
    console.log(`Server connected in port: ${port}`);
    
})