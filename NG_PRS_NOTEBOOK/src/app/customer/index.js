/**
 * customer ： 用户 登录注册 与信息相关 的所有依赖整合
 **/

var angular = require('angular');

var customerRoutes = require('./routes/customer.routes');
var loginController = require('./controller/login.controller');
var registController = require('./controller/regist.controller');
var infoController = require('./controller/info.controller');
var customerService = require('./services/customer.service');


const moduleName = 'customer';

angular.module(moduleName, [])
    .config(customerRoutes)
    .controller('loginController',loginController)
    .controller('registController',registController)
    .controller('infoController',infoController)
    .factory('customerService',customerService)
;
//
//
module.exports = moduleName;
