const express = require('express');
const customerController = require('../../app/controllers/customer.server.controller.js');


module.exports = (app) => {
    const router = express.Router();
    router.route('/login')
    .post(customerController.login);

    router.route('/register')
        .post(customerController.register);

    app.use('/api/customer/', router);
};
