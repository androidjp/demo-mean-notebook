//----------------------------------------------------------------------
// external libs
//----------------------------------------------------------------------
var angular = require('angular');

//----------------------------------------------------------------------
// controller ,service , config , template , component  for  module `note`
//----------------------------------------------------------------------
var noteRoute = require('./route/note.route');

var navbarController = require('./components/navbar/controller/navbar.controller');
var navbarComponent = require('./components/navbar');

//----------------------------------------------------------------------
// config
//----------------------------------------------------------------------
var moduleName = 'note';
angular.module(moduleName, [])
    .config(noteRoute)
    .component("navbar",navbarComponent)
    .controller("navbarController",navbarController)
    ;

module.exports = moduleName;