//---------------------------------------------------
// external dependency 
//---------------------------------------------------
var angular = require('angular');
var uirouter = require('@uirouter/angularjs');
var angularCookies = require('angular-cookies');
var ngInfiniteScroll = require('ng-infinite-scroll');


//----------------------------------------------------
// my own module
//----------------------------------------------------
var note = require('./note');
var user = require('./user');


//-----------------------------------------------------

module.exports = angular.module('notebook-app',[
    'ui.router',
    'ngCookies',
    'ui.bootstrap',
    'infinite-scroll',
    note,
    user
]);