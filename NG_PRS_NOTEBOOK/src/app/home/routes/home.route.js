/** Created by CUIJA on 05-19-2017.*/


module.exports = function ($stateProvider) {
    $stateProvider
        .state({
            name: 'default',
            url: '',
            template: require('../template/home-merchant-list.html'),
            controller: "homeController",
            controllerAs: "vm"
        })
        .state({
            name: 'home',
            url: '/',
            template: require('../template/home-merchant-list.html'),
            controller: "homeController",
            controllerAs: "vm"
        })
        .state({
            name: 'food',
            url: '/food',
            template: require('../template/home-food-list.html'),
            controller: "foodController",
            controllerAs: "vm"
        });
};