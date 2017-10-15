homeService.$inject= ['$http'];
function homeService($http){

    var urlBase = "/meat/api/food/";
    var svc = this;



    /**
     * 获取商家列表
     */
    function getAllMerchants(){
        return $http.get("http://10.222.29.179:3000/NJ_DOM_AEAT/outer/api/verify/1/0/all");
    }

    /**
     * 获取所有菜品类别
     */
    function getAllFoodType(){
        // return $http.get("");
        var resList = [];
        resList.push({"id":"0","type":"ALL"});
        resList.push(
            {
                "id":"1",
                
                "type":"Drinks"
            },
            {
                "id":"2",
                
                "type":"Snack"
            },
            {
                "id":"3",
                
                "type":"Staple Food"
            },
            {
                "id":"4",
                
                "type":"Set Food"
            }
        );
        return resList;
    }

    /**
     * 获取 某个商家的所有菜品
     * @param merchantId
     */
    function getFoodListByMerchantId(merchantId){
        console.log(merchantId);
        return $http.get("http://10.222.29.189:8888/meat/api/food/getAllFoodByMerchantId/"+merchantId);

        
    }

    /**
     * 根据 某个商家  和 某类菜品类别来获取所有菜品
     * @param merchantId
     * @param foodTypeId
     */
    function getFoodListByMerchantIdAndFoodType(merchantId,foodTypeId){
        // return $http.get("");
        console.log("getFoodListByMerchantIdAndFoodType--------------------------------->");
       


        if(foodTypeId!='ALL'){
            return $http.get("http://10.222.29.189:8888/meat/api/food/getFoodByFoodType/"+ foodTypeId+"/"+ merchantId);
        }else{
             return  getFoodListByMerchantId(merchantId);
        }
    }

    return {
        getFoodListByMerchantId:getFoodListByMerchantId,
        getFoodListByMerchantIdAndFoodType:getFoodListByMerchantIdAndFoodType,
        getAllMerchants:getAllMerchants,
        getAllFoodType : getAllFoodType
    }
}
module.exports = homeService;