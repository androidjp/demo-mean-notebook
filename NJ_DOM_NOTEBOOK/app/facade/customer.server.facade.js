const _ = require('lodash');
const fs = require('fs');
require('../models/customer.model');
const mongoose = require('mongoose');
// var foodItemModel = require('../../app/models/foodItems.json');

var customerModel = mongoose.model('Customer');

module.exports = {

    findCustomerByIdAndPassword : findCustomerByIdAndPassword,
    addCustomer : addCustomer
}

/// find Customer by id and password
function findCustomerByIdAndPassword(id,password, callback) {
    customerModel.find({$and:[{customerId:id},{password: password}]}, function(err,users){
        if(err){
            console.error(err);
            callback(err,null);
        }else {
            callback(null, users);
        }
    });
}


/// add Customer
function addCustomer(customer, callback) {
    if (customer == null) {
        callback(new Error("The customer is Empty!"), null);
    }
    let fi = new customerModel(customer);
    fi.save(function(err, doc){
        if(err) callback(err,null);
        else callback(null, doc);
    });
}