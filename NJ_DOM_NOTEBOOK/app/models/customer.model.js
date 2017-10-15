/// foodItem mongoDB Operator
const uuid = require('uuid/v4');
const envConfig = require("../../config/env/config_development.json");
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CusSchema = Schema({
    _id: String,
    customerId: String,
    password: String,
    nickName :String,
    phone : String,
    headPic : String
},{
	collection: 'customers'
});
///index


// CusSchema.pre('update', function(){
// 	this.update({}, {$set:{updateDatetime:new Date()}});
// });
//
CusSchema.pre('save', function(next){
	var customer = this;
	var uid=uuid();
	customer._id=uid;
	customer.headPic = envConfig.upload.headPic+ uid+".jpg";
	next();
});

mongoose.model('Customer', CusSchema);

