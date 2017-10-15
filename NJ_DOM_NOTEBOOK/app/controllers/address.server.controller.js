const _ = require('lodash');
// const uuid = require('uuid/v4');
const addressFacade = require('../../app/facade/address.server.facade');

module.exports = {
    addAddress: addAddress,
    updateAddress: updateAddress,
    deleteAddress: deleteAddress,
    getAddressesByCustomerId: getAddressesByCustomerId,
    getDefaultAddressByCustomerId: getDefaultAddressByCustomerId,
    setDefaultAddress:setDefaultAddress
}

//// set default address
function setDefaultAddress(req, res, next){
    var params = req.params;
    if(_.isEmpty(params)){
        return next(new Error('customerId and addressId are empty'), req, res);
    }
    var addressId = params.addressId;
    var customerId = params.customerId;
    if(_.isEmpty(customerId)){
        return next(new Error('customerId is empty'), req, res);
    }
    if(_.isEmpty(addressId)){
        return next(new Error('addressId is empty'), req, res);
    }

    addressFacade.setDefaultAddress(customerId, addressId, function (err, result) {
       if(err){
           return next(err, req, res);
       } else{

           return res.json(result);
       }
    });
}

/// get Default Address of Customer
function getDefaultAddressByCustomerId(req, res, next) {
    var params = req.params;
    if (_.isEmpty(params)) {
        return next(new Error('customerId is empty'), req, res);
    }
    var customerId = params.customerId;
    if (_.isEmpty(customerId)) {
        return next(new Error('customerId is empty'), req, res);
    }
    addressFacade.getDefaultAddressByCustomerId(customerId, (error, result) => {
        if (error) {
            return next(error, req, res);
        } else {
            return res.json(result[0]);
        }
    });
}

///获取所有地址
function getAddressesByCustomerId(req, res, next) {
    let customerId = req.params.customerId;

    if (_.isEmpty(customerId)) {
        return next(new Error('address is empty'), req, res);
    }
    else {
        addressFacade.getAddressesByCustomerId(customerId, (error, result) => {
            if (error) {
                return next(error, req, res);
            } else {
                return res.json(result);
            }
        });
    }
}

///新增地址
function addAddress(req, res, next) {
    let address = req.body;
    if (_.isEmpty(address)) {
        return next(new Error('address is empty'), req, res);
    }
    else {
        addressFacade.addAddress(address, (error, result) => {
            if (error) {
                return next(error, req, res);
            } else {
                return res.json(result);
            }
        });
    }
}

///更新地址
function updateAddress(req, res, next) {
    let address = req.body;

    if (_.isEmpty(address)) {
        return next(new Error('address is empty'), req, res);
    }
    else {
        addressFacade.updateAddress(address, (error, result) => {
            if (error) {
                return next(error, req, res);
            } else {
                return res.json(result);
            }
        });
    }
}

///删除地址
function deleteAddress(req, res, next) {
    let addressId = req.params.addressId;

    if (_.isEmpty(addressId)) {
        return next(new Error('address is empty'), req, res);
    }
    else {
        addressFacade.deleteAddress(addressId, (error, result) => {
            if (error) {
                return next(error, req, res);
            } else {
                return res.json(result);
            }
        });
    }
}
