orderController.$inject=['orderService'];
var $=require('jquery');
function orderController(orderService){

    var vm = this;
    var customer = angular.fromJson(sessionStorage.getItem("customer"));
    // vm.orderList = orderService.getAllOrders("androidJP");
    vm.orderList = [];

        orderService.getAllOrders(customer.customerId).then(function(data){
            // console.l
            console.log(data.data);
            if(data.data.code == 200){
                vm.orderList = data.data.data;
                vm.orderList.forEach(function(item,index){
                    item.isShowBtnConfirm = (item.state==3)?true : false;
                    item.isShowBtnComplain= (item.state==4)?true : false;
                    item.isShowBtnAssess = (item.state == 4 || item.state ==5)?true : false;
                    item.isShowOrderItem = false;

                });

                // console.log("----------------------------------------------------")
                // console.log(vm.orderList);
                // console.log("----------------------------------------------------")

            }
        });

    vm.selectedOrder = {};

    vm.isShowModelAssess =false;
    vm.isShowModelComplain =false;






    vm.showStatus = function(state){
        switch (state){
            default:
            case 0:
                return "等待接单";
            case 1:
                return "已接单";
            case 2:
                return "被拒绝";
            case 3:
                return "配送中";
            case 4:
                return "待评价";
            case 5:
                return "已评价";
        }
    }


    vm.toggleOrderItemList = function($index){
        var order = vm.orderList[$index];
        console.log(order);
        if(order.isShowOrderItem == null) {
            order.isShowOrderItem = true;
        }else{
            order.isShowOrderItem = !order.isShowOrderItem;
        }
    }

    //// confirm current order
    vm.confirmOrder = function($index){
        if(window.confirm("确认收到货了？")){
            orderService.confirmOrder(vm.orderList[$index].order_id).then(function(data){
                vm.orderList[$index].state = 4;
                vm.orderList[$index].isShowBtnConfirm = (vm.orderList[$index].state==3)?true : false;
                vm.orderList[$index].isShowBtnComplain= (vm.orderList[$index].state==4)?true : false;
                vm.orderList[$index].isShowBtnAssess = (vm.orderList[$index].state == 4 || vm.orderList[$index].state ==5)?true : false;
                vm.orderList[$index].isShowOrderItem = false;
            });
        }
    }

    ///
    vm.showModelAssess = function($index){
        vm.selectedOrder = vm.orderList[$index];
        // vm.isShowModelAssess = true;
        $('#order-assess-model').modal('show');

    }
    vm.hideModelAssess = function($index){
        vm.selectedOrder = vm.orderList[$index];
        vm.isShowModelAssess = false;
    }
    vm.showModelComplain = function($index){
        vm.selectedOrder = vm.orderList[$index];
        // vm.isShowModelComplain = true;
        $('#order-complain-model').modal('show');
    }
    vm.hideModelComplain = function($index){
        vm.selectedOrder = vm.orderList[$index];
        vm.isShowModelComplain = false;
    }



    {
        ///////////////starBar初始化
        ///评论 星星条

        $('#star').raty({
            cancel: false,
            half: false,
            size: 24,
            starHalf: '../../src/image/ray/star-half-big.png',
            starOff: '../../src/image/ray/star-off-big.png',
            starOn: '../../src/image/ray/star-on-big.png',
            mouseover: function(score, evt) {
                switch (score) {
                    case 5:
                        $("#star-level").html("五星好评！");
                        break;
                    case 4:
                        $("#star-level").html("还能更好！四星");
                        break;
                    case 3:
                        $("#star-level").html("中规中矩！三星");
                        break;
                    case 2:
                        $("#star-level").html("不好，二星算了");
                        break;
                    case 1:
                        $("#star-level").html("差得一匹！一星都给多了");
                        break;
                };
                vm.score = score;
            },
            mouseout: function(score, evt) {
                switch (score) {
                    case 5:
                        $("#star-level").html("五星好评！");
                        break;
                    case 4:
                        $("#star-level").html("还能更好！四星");
                        break;
                    case 3:
                        $("#star-level").html("中规中矩！三星");
                        break;
                    case 2:
                        $("#star-level").html("不好，二星算了");
                        break;
                    case 1:
                        $("#star-level").html("差得一匹！一星都给多了");
                        break;
                };
                vm.score = score;
            }
        });
    }

}

module.exports = orderController;


