var Company = require('../models/company.model');
var Product = require('../models/product.model');

exports.init = (req,res)=> {
    var apple = new Company({
        name: 'Apple',
        street : 'bsk,bs147',
        phone: '3698745120'
    })

    app.save(function(err) {
        if(err) return  console.error(err.stack)

        console.log("Apple comapny is added");

        var iphone7 = new Product({
            code: "S8",
            name: "Iphone7",
            details: "Price: 963 USD",
            company: apple._id
        });
        iphone7.save(function(err) {
            if(err) return console.error(err.stack);
            console.log("IpadPro is added")
        })
    })

    var samsung = new Company({
        name: 'Samsung',
        street: 'Kanna nagar',
        phone: "2147896530"
    })

    samsung.save(function(err) {
        if(err) return console.error(err.stack);
        console.log("samsung is added");

        var galaxyJ7 = new Product({
            code: "S11",
            name: "galaxyJ7",
            details: "Price: 963 USD",
            company: apple._id
        });
        galaxyJ7.save(function(err) {
            if(err) return console.error(err.stack);
            console.log("IpadPro is added")
        })
 

    var galaxyTabA = new Product({
        code: "S-456",
        name: "GalaxyTabA",
        details: "Price: 299.99 USD & FREE shipping",
        company: samsung._id
      });
      
      galaxyTabA.save(function(err){
          if(err) return console.error(err.stack)
          console.log("GalaxyTabA is added")
      })
    })
    res.send("Done Initial Data!");
}


exports.findAll = (req, res) => {
	Company.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};