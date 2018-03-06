var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var loginSchema=new Schema({
email:{
	type:String,
required:[true,'email is required']
},
password:{
	type:String
}
});
var Login=mongoose.model('login',loginSchema);
module.exports= Login;