homeController.$inject = ['$rootScope','$location','homeService'];
function homeController($rootScope, $location, homeService){
    var vm = this;
    vm.merchantList = [];
    vm.merchantListVo = [];
    vm.foodTypes = [];
    vm.customer = null;


    ///获取所有商家信息
    homeService.getAllMerchants().then(function(data){
        if(data.data){
            vm.merchantList = data.data;
        }
    })

    vm.merchantListVo  = vm.merchantList;

    // $rootScope.customer = vm.customer;
    // $rootScope.foodTypes = vm.foodTypes;


    /// 查看商家所有菜品
    vm.seeFoodListOfMerchant = function($index){
        var selectedMerchant = vm.merchantList[$index];
        // $rootScope.selectedMerchant = selectedMerchant;
        sessionStorage.setItem('selectedMerchant', angular.toJson(selectedMerchant));
    }

}

module.exports = homeController;