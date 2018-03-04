var express = require("express");
var app = express();
var router=express.Router();
var port = 3000;
 var Mongo = require("mongodb").MongoClient;
 var assert=require('assert');
Mongo.connect("mongodb://localhost:27017/first");
router.get('/',function(req,res,next){
	res.render('document');
});
router.get('/test3',function(req,res,next){
	var result=[];
 assert.equal(null,err);
 var cursor=db.collection('user_data').find();
 cursor.forEach(function(doc,err){
 	assert.equal(null,err);
 	result.push(doc);
 	},function(){
 		db.close();
 		res.render('document', {logindata : result});
 	}); 
 });
router.post('/login',function(req,res,next){
var logindata ={
	mail_id : req.body.mail_id,
	password : req.body.password,
}; 
assert.equal(null,err);
db.collection('user_data').insertOne(logindata,function(err,result){
	assert.equal(null,err);
	console.log('items inserted');
	db.close();

})  
});
app.use("/", (req, res) => {
  res.sendFile(__dirname + "/style.html");
});
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});