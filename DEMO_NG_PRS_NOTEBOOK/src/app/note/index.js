//----------------------------------------------------------------------
// controller ,service , config , template , component  for  module `note`
//----------------------------------------------------------------------
var angular = require('angular');

//----------------------------------------------------------------------
// Route
//----------------------------------------------------------------------
var noteRoute = require('./route/note.route');


//----------------------------------------------------------------------
// config
//----------------------------------------------------------------------
var moduleName = 'note';
angular.module(moduleName, [])
    .config(noteRoute)
    ;

module.exports = moduleName;