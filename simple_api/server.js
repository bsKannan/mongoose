var express = require('express');
var bodyParser = require('body-parser');

var dbConfig = require('./config/mongodb')
var mongoose = require('mongoose');
var customers = require('./controllers/customer');

var app = express();
app.use(bodyParser.json())
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
.then(()=>{
    console.log("Successfully connected to mongodb");
}).catch(err=> {
    console.log("Could not connect db");
    process.exit();
})

app.get('/api',(req,res)=>{
    res.send("Api is worked");
})

app.post('/api/customers',customers.create);

app.get('/api/customers', customers.findAll);

app.get('/api/customers/:customersId', customers.findOne);

// Update a Customer with Id
app.put('/api/customers/:customerId', customers.update);
 
// Delete a Customer with Id
app.delete('/api/customers/:customerId', customers.delete);

app.listen(4000,()=>{
    console.log("App listening ")
})