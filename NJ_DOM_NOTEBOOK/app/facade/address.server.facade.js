const _ = require('lodash');
const fs = require('fs');
require('../models/address.model');
const mongoose = require('mongoose');

var addressModel = mongoose.model('Address');

module.exports = {
    setDefaultAddress:setDefaultAddress,
    getDefaultAddressByCustomerId:getDefaultAddressByCustomerId,
    getAddressesByCustomerId : getAddressesByCustomerId,
    addAddress: addAddress,
    updateAddress : updateAddress,
    deleteAddress : deleteAddress
}


function setDefaultAddress(customerId,addressId, callback){
    if(_.isEmpty(customerId)){
        callback(new Error("The customerId should not be empty!",null));
        return;
    }
    if(_.isEmpty(addressId)){
        callback(new Error("The addressId should not be empty!"),null);
        return;
    }
    let promise = addressModel.updateMany({customerId:customerId}, {$set:{status:false}}).exec();
    promise.then(
        function(result){
            addressModel.updateMany({$and:[{customerId:customerId},{addressId:addressId}]},{$set:{status:true}},function(err,res){
               if(err){
                   callback(err,null);
               } else{
                   callback(null, res);
               }
            });
        },
        function(err){
            callback(err, null);
        }
    );
}

/// add Customer Address
function addAddress(address, callback) {
    if(address == null){
        callback(new Error("The address should no be empty!"), null);
        return;
    }
    let addr = new addressModel(address);
    addr.save(function(err, doc){
        if(err){
            callback(err, null);
        }
        else {
            callback(null, doc);
        }
    });
}


/// update Customer Address
function updateAddress(address, callback) {
    if(address == null){
        callback(new Error("The address should no be empty!"), null);
        return;
    }

    addressModel.updateMany({addressId:address.addressId}, {$set:address},function(err, doc){
        if(err) callback(err, null);
        else  callback(null, doc);
    });
}

/// delete Address
function deleteAddress(addressId, callback) {
    if (addressId == null) {
        callback(new Error("Remove address Error!"), null);
    }
    addressModel.remove(
        {addressId:addressId},
        function(err){
            if(err){
                callback(err, null);
            }
            else callback(null, "success delete address");
        }
    )
}



/// 获取当用户的所有地址
function getAddressesByCustomerId(customerId, callback) {
     addressModel.find({customerId:customerId}, function(err,addrs){
        if(err){
            callback(err, null);
        }
         else callback(null,addrs);
    });
}

//获取用户的默认地址
function getDefaultAddressByCustomerId(customerId, callback){
    addressModel.find({$and:[{customerId:customerId },{status:true}]}, function(err,addrs){
        if(err){
            callback(err, null);
        }
        else callback(null,addrs);
    });
}