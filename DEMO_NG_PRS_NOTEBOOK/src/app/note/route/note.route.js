module.exports = function($stateProvider){
    $stateProvider
        .state({
            name:"note-list",
            url:'/note',
            // template:__dirname+"../template/note-list.html"
            template: require('../template/note-list.html')
        })
        .state({
            name:"default",
            url:'/',
            // template:__dirname +"../template/note-list.html"
            template: require('../template/note-list.html')
        });
}