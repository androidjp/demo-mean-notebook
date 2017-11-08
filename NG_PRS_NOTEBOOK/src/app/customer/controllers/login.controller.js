
LoginController.$inject = ['$rootScope','$scope', '$location','$cookies', '$cookieStore', 'customerService'];

function LoginController($rootScope,$scope, $location, $cookies, $cookieStore,customerService) {
    var vm = this;

    var location  = $location;

    vm.loginUser = {};

    //Login
    $scope.login = function () {
        customerService.login(vm.loginUser)
            .then(function(data){
                if(data.data){
                    sessionStorage.setItem('customer', angular.toJson(data.data));
                    location.path('/');
                }else{
                    location.path('/login');
                }
            });
    };

    vm.back = function(){
        location.path('');
    }

}

module.exports = LoginController;
