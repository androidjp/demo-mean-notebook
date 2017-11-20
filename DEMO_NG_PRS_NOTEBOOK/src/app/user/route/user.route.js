module.exports = function($stateProvider){
    $stateProvider
        .state({
            name:'login',
            url:'/login',
            // template:__dirname+"../template/login.html"
            template:require('../template/login.html')
        });
}

