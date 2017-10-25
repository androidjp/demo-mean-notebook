/**
 * APP 总配置
 * @type {angular|angular.IAngularStatic}
 */
var angular = require('angular');
var uirouter = require('@uirouter/angularjs');
var angularCookies = require('angular-cookies');

// var home = require('./home');
// var order = require('./order');
// var customer = require('./customer');
// var uibootstrap = require('angular-ui-bootstrap');
// var angularCookies = require('angular-cookies');

// var home = require('./home');
// var customer = require('./customer');

var core = require('./core');


module.exports = angular.module('notebook-app', [
    //vendor moudles
    'ui.router',
    'ngCookies',
    // application modules
    // home,
    // order,
    // customer,
    'ui.bootstrap',
    'ngCookies',
    // application modules
    core
])
;