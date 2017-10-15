
RegistController.$inject = ['$scope', '$location','$cookies', '$cookieStore', 'customerService'];

function RegistController($scope, $location, $cookies, $cookieStore, customerService) {
    var vm = this;



    //Regist
    vm.regist = function () {

        var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
        var comReg = /^[a-zA-Z0-9_]{1, }$/;

        var id = $('input[name=customerId]').val();
        var password = $('input[name=password]').val();
        var nickName = $('input[name=nickName]').val();
        var phone = $('input[name=phone]').val();
        var address = $('input[name=sddress]').val();
        if(id=='' || password=='' || nickName=='' || phone=='' || address =='' ){
            $('.error').text('invalid input');
            return ;
        }

        var form =document.getElementById("registForm");
        var fd=new FormData(form);
        customerService.regist(fd)
            .then(function(data){
                if(data.data){

                    $location.path('login')
                }else{
                }
            });
    };
}
module.exports = RegistController;