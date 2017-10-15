cartController.$inject = ['$rootScope','$scope', '$cookies','$http','$location'];
var $ = require("jquery");
const URL_BASE_ORDER = "/meat/api/order/";
function cartController($rootScope, $scope, $cookies, $http, $location) {
    var vm = this;
    vm.shopping_cart = angular.fromJson(sessionStorage.getItem('shopping_cart'));
    var customer = angular.fromJson(sessionStorage.getItem('customer'));
    vm.merchant = angular.fromJson(sessionStorage.getItem('selectedMerchant'));

    sessionStorage.setItem('fly-img-status', JSON.stringify({'fly-img-status': 'true'}));

    //Show or hide the shopping cart according to the user status.
    if(customer){
        vm.cart_state = false;
        vm.trigger_state = true;
    } else {
        vm.cart_state = false;
        vm.trigger_state = false;
    }

    //add food from the food list
    vm.addFood = function(food){
        var customer = angular.fromJson(sessionStorage.getItem('customer'));
        if(customer){  //judge if the user has logined
            vm.shopping_cart = angular.fromJson(sessionStorage.getItem('shopping_cart'));

            if(vm.shopping_cart){  //judge the shopping cart is exit

                if(vm.shopping_cart.merchant_id != food.merchant_id){   //judge the mid of food and mid of shopping cart

                    if(vm.shopping_cart.totalCount > 0) {


                        if(window.confirm('The shoping cart have to be cleared before you add other. Are you sure to clear?')){

                            vm.shopping_cart.foods.splice(0, vm.shopping_cart.foods.length);

                            vm.shopping_cart.merchant_id = food.merchant_id;
                            vm.updateCountAndCost();

                            sessionStorage.setItem('fly-img-status', JSON.stringify({'fly-img-status': 'true'}));


                        }  else{
                            sessionStorage.setItem('fly-img-status', JSON.stringify({'fly-img-status': 'false'}));
                            // $('.u-flyer').attr('style', 'display:none');
                            return false;
                        }
                    }
                }
            } else {
                //shopping cart is not exit, construct a new one
                vm.shopping_cart={totalCount:0, totalCost:0, merchant_id:food.merchant_id, foods:[]};
            }

            var found = false;
            for(var i = 0; i < vm.shopping_cart.foods.length; i++){
                if(vm.shopping_cart.foods[i].food_id == food.food_id){
                    vm.shopping_cart.foods[i].count += 1;

                    found = true;
                }
            }
            if(found == false){
                food.count = 1;
                vm.shopping_cart.foods.push(food);
            }

            sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));
            vm.updateCountAndCost();

        } else {

            if(window.confirm('Please sign in before you shopping. Sign in now?')){
                $location.path('/login')
                return true;
            }else {
                return false;
            }
        }
    }

    //control the cart open and close
    vm.open = function(){

        vm.cart_state = true;
        vm.trigger_state = false;
    }
    vm.close = function(){

        vm.cart_state = false;
        vm.trigger_state = true
    }


    vm.addCartFood = function(index){
        vm.shopping_cart.foods[index].count += 1;

        sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));
        vm.updateCountAndCost();
    }
    vm.subCartFood = function(index){
        if(vm.shopping_cart.foods[index].count > 1){
            vm.shopping_cart.foods[index].count -= 1

            sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));
            vm.updateCountAndCost();
        }
    }

    vm.delCartFood = function(index){
        if(window.confirm('remove?')){
            vm.shopping_cart.foods.splice(index, 1);

            sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));
            vm.updateCountAndCost();
            return true;
         }else{
            return false;
        }

    }
    vm.clearCart = function(){
        if(vm.shopping_cart==null || vm.shopping_cart.totalCount==undefined || vm.shopping_cart.totalCount <= 0){
            return;
        }

        if(window.confirm('clear?')){
            vm.shopping_cart.foods.splice(0, vm.shopping_cart.foods.length);
            vm.updateCountAndCost();
            sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));

            return true;
        }else {
             return false;
        }

    }

    vm.checkout = function(){
        if(vm.shopping_cart==null || vm.shopping_cart.totalCount==undefined || vm.shopping_cart.totalCount <= 0){
            return;
        }
        if(window.confirm('checkout?')){
            var customer = angular.fromJson(sessionStorage.getItem('customer'));

            vm.shopping_cart.foods.splice(0, vm.shopping_cart.foods.length);
            vm.updateCountAndCost();

            sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));
            return true;
        }else {
            return false;
        }
    }
    //update the count and cost of the shopping cart
    vm.updateCountAndCost = function(){

        if(vm.shopping_cart){

            vm.shopping_cart.totalCount = 0;
            vm.shopping_cart.totalCost = 0;
            for(var i = 0; i < vm.shopping_cart.foods.length; i++){
                vm.shopping_cart.totalCount += vm.shopping_cart.foods[i].count;
                vm.shopping_cart.totalCost += vm.shopping_cart.foods[i].count * vm.shopping_cart.foods[i].price;
            }

            sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));
        }
    }

    vm.updateCountAndCost();

    ///show the OrderDetail Modal
    vm.showOrderDetail = function(){

        if(vm.shopping_cart==null || vm.shopping_cart.totalCount==undefined || vm.shopping_cart.totalCount <= 0){
            return;
        }

        ///先，加载用户的默认地址
        $http.get("/api/customer/getDefaultAddressByCustomerId/"+ customer.customerId).then(function (data) {
            if(data.data){
                /// 有了默认地址
                //设置进 购物车中
                vm.shopping_cart.address = data.data.content;

            }else{
                ///你没有设置默认地址，需要设定了
                vm.shopping_cart.address = null;

            }
        });

        $('#modal-order-detail').modal('show');
    }

    ///want to modify default address of customer
    vm.modifyAddress = function(){

        $('#modal-order-detail').modal('hide');
        $(".modal-backdrop").remove();

        $location.path('info');

    }

    ///ordering (send order msg to Merchant)
    vm.ordering = function () {
        window.alert("下单啦！");

        $('#modal-order-detail').modal('hide');
        $(".modal-backdrop").remove();

        var reqOrder = {
            merchant_id:vm.merchant.mid,
            storeName:vm.merchant.storeName,
            customer_id: customer.customerId,
            customer_headpic:customer.headPic,
            customer_name: customer.nickName,
            total: vm.shopping_cart.totalCost,
            telephone: customer.phone,
            address:vm.shopping_cart.address,
            items:vm.shopping_cart.foods
        };
        console.log('----------------------------------------------------------');
        console.log(reqOrder);
        console.log('----------------------------------------------------------');

        $http({method:'POST', url:"http://10.222.29.189:8888/meat/api/order/addOrder" ,data:reqOrder}).then(function(data){
           if(data.data){
               ///clear shopping car
               // alert("success");

               ///socket.io
               var socket = io.connect("http://10.222.29.189:8888/");
               socket.emit('refer', {
                   "merchant_id": reqOrder.merchant_id,
                   "data": "1"
               });

               var customer = angular.fromJson(sessionStorage.getItem('customer'));
               vm.shopping_cart.foods.splice(0, vm.shopping_cart.foods.length);
               vm.updateCountAndCost();
               sessionStorage.setItem('shopping_cart', angular.toJson(vm.shopping_cart));

               // jump to my orderList
               $location.path("order");

           } else{
               alert("error");
           }
        });
    }

    $rootScope.addFood = vm.addFood;
}
module.exports = cartController;