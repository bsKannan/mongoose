var express = require('express');
var jwt = require('jsonwebtoken');

var app = express();

app.get('/api', (req,res)=>{
    res.json({
        message:"welcome to jwt simple example"
    })
})

app.post('/api/login',(req,res)=> {
    console.log("ram");
    
    const user = { 
        id:"1",
        name:"ram"
    };
    const token = jwt.sign({ user },'my_secret_key');
    console.log(token);
    
    res.json({
        token:token
    })
})
app.get('/api/protected', ensureToken,function (req,res){
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) {
            console.log(err);
            
            res.sendStatus(403);
        }else {
            console.log(data);
            
            res.json({
                message:"api is protected!!!!",
                data:data
            })
        }
    })
})


function ensureToken(req,res,next){
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else {
        res.sendStatus(403)
    }
}
app.listen(4000,()=>{
    console.log("server connected on 4000")
})
