module.exports = function($stateProvider){
    $stateProvider
    .state({
        name:"default",
        url:'',
        template: require('../templates/note-list.html'),
        controller:"noteListController",
        controllerAs:'vm'
    })
        .state({
            name:"note-list",
            url:'/note',
            template: require('../templates/note-list.html'),
            controller:"noteListController",
            controllerAs:'vm'
        })
        .state({
            name:"home",
            url:'/',
             template: require('../templates/note-list.html'),
             controller:"noteListController",
             controllerAs:'vm'
         });
}