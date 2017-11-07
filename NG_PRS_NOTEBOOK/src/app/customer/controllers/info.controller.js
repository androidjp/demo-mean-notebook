InfoController.$inject = ['$scope','$http','customerService'];
var $=require('jquery');
function InfoController($scope, $http,customerService){
    var vm = this;
    /// 获取当前登录用户
    vm.customer = angular.fromJson(sessionStorage.getItem('customer'));
    // console.log(vm.customer.headPic);

    ///获取客户的所有地址
    console.log(vm.customer.customerId);
    customerService.getAddressesByCustomerId(vm.customer.customerId)
        .then(function(data){
            if(data.data){
                vm.addresses = data.data;
            }else{
            }
        });



    console.log(vm.addresses);

    vm.setDefaultAddress = function(index){
        if(vm.addresses){
            for(var i = 0; i < vm.addresses.length; i++){
                if(vm.addresses[i].status == true)
                     vm.addresses[i].status = false;
            }
            vm.addresses[index].status = true;
            customerService.setDefaultAddress(vm.customer.customerId,vm.addresses[index].addressId).then(function(data){
                if(data.data){
                    window.alert("成功修改地址");
                }
            });
       }
    }

    ///打开模态框
    vm.showModalNewAddress = function(){
        vm.addingAddress = "";
        $('#add-address-model').modal({backdrop: 'static', keyboard: false});
        $('#add-address-model').modal('show');
    }

    ///修改模态框
    vm.showModalModifyAddress = function(index){
        vm.selectedAddress = vm.addresses[index];
        vm.selectedAddressIndex = index;
        ///修改前的地址备份
        vm.selectedAddressContent = vm.selectedAddress.content.toString();
        $('#update-address-model').modal({backdrop: 'static', keyboard: false});
        $('#update-address-model').modal('show');
    }

    ///添加地址
    vm.addAddress = function(){
        if(vm.addingAddress.length==0){
            // $('#add-address-model').modal('hide');
            window.alert('地址不能为空');
            return;
        }

        var address = {
            content: vm.addingAddress.toString(),
            customerId:vm.customer.customerId
        };

        customerService.addAddress(address).then(function (data) {
            if(data.data){
                //成功添加添加
                vm.addresses.push(data.data);
                $('#add-address-model').modal('hide');
            }else{
                //添加失败
                $('#add-address-model').modal('hide');
                // window.alert("添加地址失败");
            }
        })
    }

    ///删除地址
    vm.deleteAddress = function(index){
        if(window.confirm("确实删除这个地址？")==true){
            if(vm.addresses){
                customerService.deleteAddress(vm.addresses[index].addressId).then(function(data){
                    vm.addresses.splice(index, 1);
                });
            }
        }
    }

    //更新地址
    vm.updateAddress = function(){

        if(vm.selectedAddress.content.length==0){
            return;
        }

        customerService.updateAddress(vm.selectedAddress).then(function(data){
           if(data.data){
               ///成功修改地址
               $('#update-address-model').modal('hide');
           }else{
               //修改失败
               vm.selectedAddress.content = vm.selectedAddressContent.toString();
               $('#update-address-model').modal('hide');
               window.alert("修改失败");
           }
        });
    };
    ///取消修改地址
    vm.resetAddress =function(){
        if(vm.selectedAddressContent){
            vm.selectedAddress.content = vm.selectedAddressContent.toString();
        }
    }


}

module.exports = InfoController;