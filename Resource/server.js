var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var entries = [];

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', express.static('client',{
    index:"/views/index.html"
}));

app.post("/sendDetails",function(req, res){
    if(req.body.detail){
        entries.push(req.body.detail);
    }
});

app.listen('3000',function(){
    console.log('Express has started at http://localhost:3000');
});