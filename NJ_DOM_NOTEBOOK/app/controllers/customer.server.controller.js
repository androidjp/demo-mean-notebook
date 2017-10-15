const _ = require('lodash');
// const uuid = require('uuid/v4');
// const customerFacade = require('../../app/facade/foodItem.server.facade.js');
const customerFacade = require('../../app/facade/customer.server.facade');
const addressFacade = require('../../app/facade/address.server.facade');
const envConfig = require('../../config/env/config_development');
var formidable = require('formidable');

var _f = require('../utils/file.util');

module.exports = {
    login: login,
    register: register
}

///用户登录
function login(req, res, next) {

    // console.log(JSON.stringify(req));
    let body = req.body;
    let customerId = body.customerId;
    let password = body.password;
    if (_.isEmpty(customerId)) {
        return next(new Error('customerId is empty'));
    } else if (_.isEmpty(password)) {
        return next(new Error('password is empty'));
    }
    else {
        customerFacade.findCustomerByIdAndPassword(customerId, password, (error, result) => {
            if (error) {
                return next(new Error(error), req, res);
            } else {
                console.log(result);
                return res.json(result[0]);
            }
        });
    }
}

///用户注册
function register(req, res, next) {

    var form = new formidable.IncomingForm();
    _f.uploadSetting(form);
    form.parse(req, function (err, fields, files) {

        if (err) {
            next(err, req, res);
        } else {
            var customerMsg = fields;
            var customer = {
                customerId: customerMsg.customerId,
                password: customerMsg.password,
                phone: customerMsg.phone,
                nickName: customerMsg.nickName
            };


            console.log(JSON.stringify(customer));
            customerFacade.addCustomer(customer, (err, result) => {
                if (err) {
                    return next(err, req, res);
                } else {
                    let resCus = result;
                    let addr = {
                        customerId: customerMsg.customerId,
                        content: customerMsg.address,
                        status: true
                    };
                    addressFacade.addAddress(addr, function (err, result) {
                        if (err) {
                            return next(new Error(error));
                        } else {

                            var picName = resCus._id + ".jpg";
                            console.log(files.img.path +"-------------> " + envConfig.upload.headPic + picName);
                            _f.rename(files.img.path, envConfig.upload.localHeadPic + picName);

                            // return res.json(result);

                            ///返回注册成功的用户信息
                            resCus.password = null;
                            return res.json(resCus);
                        }
                    });

                }
            });
        }
    });
}
