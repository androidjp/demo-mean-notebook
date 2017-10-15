orderService.$inject = ['$http'];
const URL_BASE_ORDER = "/meat/api/order/";

function orderService($http){
    return {
        ////获取全部订单
        getAllOrders:getAllOrders,

        ///确认订单
        confirmOrder:confirmOrder,

        ///投诉
        complainOrder:complainOrder,

        //订单评价
        assessOrder : assessOrder
    }

    ///get all orders
    function getAllOrders(customerId) {
        return $http.get("http://10.222.29.189:8888/meat/api/order/getOrderByCustomerId/"+ customerId);
    }

    ///confirm order
    function confirmOrder(orderId){
        return $http.post("http://10.222.29.189:8888/meat/api/order/updateOrderStateByOrderId/4/"+orderId);
    }




    function complainOrder(customerId, complainContent){

    }
    function assessOrder(orderId, level, content){

    }

}

module.exports = orderService;