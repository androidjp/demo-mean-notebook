/**
 * Notebook首页基础操作
 **/

///Vendor modules
var angular = require('angular');

/// Dependence Modules
// var navbarController = require('./../common/components/navbar/controller/navbar.controller');
// var navbarComponent = require('./../common/components/navbar/navbar');

// var cartController = require('./../common/components/cart/cart.controller');
// var cartComponent = require('./../common/components/cart/cart');


/// Routes
var noteRoutes = require('./routes/note.route');
/// Controllers
var noteController = require('./controllers/note.controller');
/// Service
var noteService = require('./services/note.service');

/// Current Module Name
const moduleName = 'core';
//-------------------------------------------------------------------------------------------------------

angular.module(moduleName,  ['ngAnimate'])
    .config(noteRoutes)
    .factory('noteService', noteService)
    .controller('noteController', noteController)
;

module.exports = moduleName;