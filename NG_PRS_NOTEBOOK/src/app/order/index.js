/**
 * order ： 我的订单详情 的所有依赖整合
 **/

///Vendor modules
var angular = require('angular');

/// Dependence Modules
// var navbarController = require('./../common/components/navbar/controller/navbar.controller');
// var navbarComponent = require('./../common/components/navbar/navbar');


/// Routes
var orderRoutes = require('./routes/order.route');
/// Controllers
var orderController = require('./controller/order.controller');
// var orderAssessCtrl = require('./controller/order.assess.controller');
/// Service
var orderService = require('./services/order.service');

/// Current Module Name
const moduleName = 'order';
//-------------------------------------------------------------------------------------------------------

angular.module(moduleName, ['home'])
    .config(orderRoutes)
    // .component('navbar', navbarComponent)
    // .controller('navbarController',navbarController)
    .factory('orderService', orderService)
    .controller('orderController', orderController)
    // .controller('orderAssessCtrl',orderAssessCtrl)
;

module.exports = moduleName;