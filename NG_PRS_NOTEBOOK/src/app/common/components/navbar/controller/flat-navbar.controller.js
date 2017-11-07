/* Created by Aquariuslt on 5/20/17.*/


flatNavbarController.$inject = ['$rootScope','$scope','$cookies','$location'];
function flatNavbarController($rootScope,$scope, $cookies,$location) {

    var vm = this;
    vm.navBrand = {
        title:"Flat Note",
        icon:"",
        url:"",
        subMenu:null
    };

    vm.navTabs = [
        {
            title:"个人资料",
            icon:"",
            url:"",
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
}
module.exports = flatNavbarController;