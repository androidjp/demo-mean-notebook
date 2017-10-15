/**
 * home ： 首页 的所有依赖整合
 **/

///Vendor modules
var angular = require('angular');

/// Dependence Modules
var navbarController = require('./../common/components/navbar/controller/navbar.controller');
var navbarComponent = require('./../common/components/navbar/navbar');

var cartController = require('./../common/components/cart/cart.controller');
var cartComponent = require('./../common/components/cart/cart');


/// Routes
var homeRoutes = require('./routes/home.route');
/// Controllers
var homeController = require('./controller/home.controller');
var foodController = require('./controller/food.controller');
/// Service
var homeService = require('./services/home.service');

/// Current Module Name
const moduleName = 'home';
//-------------------------------------------------------------------------------------------------------

angular.module(moduleName, [])
    .config(homeRoutes)
    .component('navbar', navbarComponent)
    .controller('navbarController',navbarController)
    .component('cart', cartComponent)
    .controller('cartController',cartController)
    .factory('homeService', homeService)
    .controller('homeController', homeController)
    .controller('foodController', foodController)
;

module.exports = moduleName;