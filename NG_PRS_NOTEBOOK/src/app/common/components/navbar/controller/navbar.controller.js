/* Created by Aquariuslt on 5/20/17.*/


navbarController.$inject = ['$rootScope','$scope','$cookies','$location'];
function navbarController($rootScope,$scope, $cookies,$location) {

    var vm = this;

    vm.menuLeft = [];
    vm.menuRight = [];

    vm.isBackShow = false;
    vm.isUserMsgShow = false;

    vm.userMsg = {};

    vm.showBack = function () {
        vm.isBackShow = true;
    }
    vm.hideBack = function () {
        vm.isBackShow = false;
    }

        vm.menuLeft = $rootScope.foodTypes;

    vm.userMsg = angular.fromJson(sessionStorage.getItem('customer'));

    // console.log("customer headPic :" + vm.userMsg.headPic);


    if(sessionStorage.getItem('customer')){
        vm.menuRight = [];
        vm.menuLogout =  {
            state: 'logout',
            displayName: 'Logout'
        };
        vm.menuOrder =
            {
                state: 'order',
                displayName: '我的订单'
            };

        vm.userMsg = angular.fromJson(sessionStorage.getItem('customer'));
            console.log("customer :" + vm.userMsg);
            vm.isUserMsgShow = true;

        } else {
            vm.isUserMsgShow = false;
            vm.menuRight = [
                {
                    state: 'login',
                    displayName: '登录'
                },
                {
                    state: 'register',
                    displayName: '注册'
                }
            ];
        }


    vm.logout = function(){
        if(window.confirm('The shoping car will clear if logout! Continue ?')){
            sessionStorage.removeItem('customer');
            sessionStorage.removeItem('shopping_cart');
            vm.isUserMsgShow = false;
            vm.isUserMsgShow = false;
            vm.menuRight = [
                {
                    state: 'login',
                    displayName: '登录'
                },
                {
                    state: 'register',
                    displayName: '注册'
                }
            ];
            $location.path('/');

            return true;
        }else {
            return false;
        }
    }
}
module.exports = navbarController;