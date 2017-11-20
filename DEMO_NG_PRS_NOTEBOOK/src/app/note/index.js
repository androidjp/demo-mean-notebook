//----------------------------------------------------------------------
// external libs
//----------------------------------------------------------------------
var angular = require('angular');

//----------------------------------------------------------------------
// controller ,service , config , template , component  for  module `note`
//----------------------------------------------------------------------
var noteRoute = require('./routes/note.route');

var navbarController = require('./components/navbar/controller/navbar.controller');
var navbarComponent = require('./components/navbar');

var noteListService = require('./services/note.list.service');
var noteListController = require('./controllers/note.list.controller');


//----------------------------------------------------------------------
// config
//----------------------------------------------------------------------
var moduleName = 'note';
angular.module(moduleName, [])
    .config(noteRoute)
    .component("navbar",navbarComponent)
    .controller("navbarController",navbarController)
    .factory('noteListService', noteListService)
    .controller('noteListController' , noteListController)
    ;

module.exports = moduleName;