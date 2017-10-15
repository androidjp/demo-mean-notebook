
module.exports = function ($stateProvider) {
    $stateProvider
        .state({
            name: 'order',
            url: '/order',
            template: require('../template/order-list.html'),
            controller: "orderController",
            controllerAs: "vm"
        })
        .state({
            name: 'orderDetail',
            url: '/orderDetail',
            template: require('../template/order-detail.html'),
            controller: "orderController",
            controllerAs: "vm"
        });
};