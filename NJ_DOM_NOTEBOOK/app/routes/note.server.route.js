const express = require('express');
const noteController = require('../../app/controllers/note.server.controller');

module.exports = (app) => {
    const router = express.Router();

    router.route('/updateAddress')
        .post(addressController.updateAddress);

    // router.route('/deleteAddress/:addressId')
    //     .delete(addressController.deleteAddress);

    // router.route('/getAddressesByCustomerId/:customerId')
    //     .get(addressController.getAddressesByCustomerId);

    // router.route('/getDefaultAddressByCustomerId/:customerId')
    //     .get(addressController.getDefaultAddressByCustomerId);

    // router.route('/:customerId/setDefaultAddress/:addressId')
    //     .put(addressController.setDefaultAddress);

    app.use('/api/customer/', router);
};
