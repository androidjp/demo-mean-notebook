function customerService($http) {
    // var urlBase = '/user';
    var urlBase = '/api/customer';
    var _userService = {};

    // $http.defaults.headers.put = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //     'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
    // };
    // $http.defaults.useXDomain = true;

    _userService.login = function(data){
        return $http({method:'POST', url:urlBase+"/login",data:data});
    }

    _userService.regist = function(formdata) {
        return $http({method:'POST', url:urlBase+"/register",data:formdata,headers: {'Content-Type':undefined},
            transformRequest: angular.identity});
    };

    ///获取所有地址
    _userService.getAddressesByCustomerId  = function(customerId){
        var request = {
            method:'GET',
            url:urlBase+"/getAddressesByCustomerId/"+customerId
        };

        return $http(request);
    }

    ///设置默认地址
    _userService.setDefaultAddress = function(customerId, addressId){
        return $http({method:'PUT', url:urlBase+"/"+customerId+"/setDefaultAddress/"+addressId});
    }

    ///修改地址
    _userService.updateAddress = function(address){
        return $http({method:'POST', url:urlBase+"/updateAddress" ,data:address});
    }

    ///删除地址
    _userService.deleteAddress = function(addressId){
        return $http({method:'DELETE', url:urlBase+"/deleteAddress/"+addressId});
    }

    ///添加新地址
    _userService.addAddress = function(address){
        return $http({method:'POST', url:urlBase+"/addAddress" , data:address});
    }

    return _userService;
}
module.exports = customerService;