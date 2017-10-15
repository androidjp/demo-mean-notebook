const express = require('express');
const customerController = require('../../app/controllers/customer.server.controller.js');
const addressController = require('../../app/controllers/address.server.controller');


module.exports = (app) => {
    const router = express.Router();
    router.route('/login')
    .post(customerController.login);

    router.route('/register')
        .post(customerController.register);

    router.route('/addAddress')
        .post(addressController.addAddress);

    router.route('/updateAddress')
        .post(addressController.updateAddress);

    router.route('/deleteAddress/:addressId')
        .delete(addressController.deleteAddress);

    router.route('/getAddressesByCustomerId/:customerId')
        .get(addressController.getAddressesByCustomerId);

    router.route('/getDefaultAddressByCustomerId/:customerId')
        .get(addressController.getDefaultAddressByCustomerId);

    router.route('/:customerId/setDefaultAddress/:addressId')
        .put(addressController.setDefaultAddress);

    app.use('/api/customer/', router);
};
