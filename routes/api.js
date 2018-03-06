var express = require("express");
var router=express.Router();
var Login=require('../modules/files.js');


router.post('/login',function(req,res){
	res.send("login done")
 });
module.exports= router;