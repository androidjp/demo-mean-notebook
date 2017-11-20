/* Created by Aquariuslt on 5/20/17.*/


navbarController.$inject = ['$rootScope','$scope','$cookies','$location'];
function navbarController($rootScope,$scope, $cookies,$location) {

    var vm = this;
    vm.navBrand = {
        title:"Flat Note",
        icon:"",
        url:"",
        subMenu:null
    };

    vm.navTabs = [
        {
            title:"登录",
            icon:"",
            url:"/login",
            active:true,
            subMenu:null
        },
        {
            title:"新笔记",
            icon:"",
            url:"",
            active:false,
            subMenu:null
        }
    ];


    vm.initNavTabs = function(navTabs){
        if(navTabs){
            vm.navTabs = navTabs;
        }
    }


    vm.dumpPage = function(item){
        if(!item.url || item.url.length==0){
            return;
        }
        $location.path(item.url);
    }
}
module.exports = navbarController;