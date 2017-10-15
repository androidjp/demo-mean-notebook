foodController.$inject = ['$cookies','$rootScope','homeService']
function foodController($cookies,$rootScope,homeService){

    var vm = this;
    vm.foodList = [];
    vm.foodTypes = homeService.getAllFoodType();

    vm.selectedMerchant = angular.fromJson(sessionStorage.getItem('selectedMerchant'));


    homeService.getFoodListByMerchantId(vm.selectedMerchant.mid).then(function(data){
        console.log(data);
        if(data.data.code == 200){
            vm.foodList = data.data.data;
        }
    });


    ///获取某个类型的所有菜品
    vm.getFoodListByFoodType = function(foodTypeId){
        console.log("获取 类型"+ foodTypeId+"的菜品列表");
        
        homeService.getFoodListByMerchantIdAndFoodType(vm.selectedMerchant.mid, foodTypeId).then(function(data){
           if(data.data.code ==200){
               vm.foodList = data.data.data;
           }
        });
    }

    ///点击菜品，添加购物车
    vm.addShoppingCart = function($index){
        var selectedFood = vm.foodList[$index];
        /// 添加购物车中
        $rootScope.addFood(selectedFood);
    }
}

module.exports = foodController;