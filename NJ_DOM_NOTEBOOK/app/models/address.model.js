/// foodItem mongoDB Operator
const uuid = require('uuid/v4');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddressSchema = Schema({

    addressId: String,
    status: Boolean,
    content: String,
    customerId: String
}, {
    collection: 'addresses'
});
///index


// CusSchema.pre('update', function(){
// 	this.update({}, {$set:{updateDatetime:new Date()}});
// });
//
AddressSchema.pre('save', function(next){
	var address = this;
	address.addressId = uuid();
	if(address.status != true){
	    address.status = false;
    }
	next();
});

mongoose.model('Address', AddressSchema);

