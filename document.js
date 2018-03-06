var express = require("express");
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

var app = express();
app.use(bodyParser.json());
// mongoose.connect('mongodb://localhost/login');
// mongoose.Promise=global.Promise;
var api = require('./routes/api.js');

var port = 3000;
app.use(express.static('public'))
app.use("/api",api);

 app.use("/data",(req,res)=>{
 	res.sendFile(__dirname+"/public/test3.html");
 })
app.listen(port, () => {
  console.log("Server listening on port " + port);
});