//---------------------------------------------------
// external dependency 
//---------------------------------------------------
var angular = require('angular');/// angular core
var uirouter = require('@uirouter/angularjs');/// ui-router for angular


//----------------------------------------------------
// my own module
//----------------------------------------------------
var note = require('./note');
var user = require('./user');


//-----------------------------------------------------

module.exports = angular.module('notebook-app',[
    'ui.router',
    note,
    user
]);