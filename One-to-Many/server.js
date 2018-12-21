var express = require('express');
var bodyParser = require('body-parser');
require('./config/db');
var app = express();



app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3301;

app.use('/api',(req,res)=>{
    res.send("api is working");
})


app.listen(port,()=>{
    console.log("server connected successfully!");
    
})