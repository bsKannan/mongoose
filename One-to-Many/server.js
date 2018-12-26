var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/DB');
// var companies = require('./routes/companies.routes')
// var products = require('./routes/products.routes')

var companies = require('./controllers/companies.controller');
var product = require('./controllers/products.controller');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );


var app = express();

// var companies = '../routes/companies.routes';
// var products = '../routes'

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3301;

app.get('/api',(req,res)=>{
    res.send("api is working");
})


app.get('/api/companies/init',companies.init);
app.get('/api/companies',companies.findAll);


    app.get('/api/products',product.findAll);


    app.get('/api/products/:productName',product.findByName);

    app.get('/api/product/company/:companyId',product.findByCompanyId);





app.listen(port,()=>{
    console.log("server connected successfully!");
    
})