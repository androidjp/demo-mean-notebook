noteListController.$inject = ['$cookies','$rootScope','noteListService']
function noteListController($cookies,$rootScope,noteListService){

    
    var vm = this;

    vm.curPage = 0;
    vm.noteList = [];
    

    vm.isNoteListEmpty = false;

    vm.curUser = {
        name:'WUJA13'
    };

    vm.isLike = false;

    vm.isServerDone = false;

    vm.toggleLike = function(note){
        vm.isLike =  !vm.isLike;
        console.log(`${vm.isLike},the selected note :${note.toString()}`);
    }

    noteListService.getNoteListSortByDate("0", function(err,data){
        if(err){
            console.error(err);
            vm.isNoteListEmpty = true;
        }else{
            console.log(JSON.stringify(data));
            if(data.data){
                vm.noteList = data.data;
            }
        }
    });

    vm.enterNoteItem = function(noteItem){
        
    };

    vm.busy = false;
    vm.nextPage = function(){
        vm.busy = true;
        noteListService.getNoteListSortByDate(vm.curPage ,function(err,data){
            if(err){
                console.error(err);
                vm.isServerDone = true;
                console.error("后台done 了");
            }else{
                vm.isServerDone = false;
                if(data.data){
                    if(data.data.length==0){
                        vm.noData = true;
                    }else{
                        vm.noData = false;
                        for(var i=0;i<data.data.length;i++){
                            vm.noteList.push(data.data[i]);
                            
                        }
                        vm.curPage +=1;                        
                    }
                }
            }
            vm.busy = false;
          });
    };

    // (function(){
    //     vm.busy = true;
    //     console.log("======= vm.busy : "+ vm.busy);
    //     noteListService.getNoteListSortByDate(0 ,function(err,data){
    //         if(err){
    //             console.error(err);
    //         }else{
    //             console.log(data);
    //             if(data.data){
    //                 vm.noteList = [];
    //                 vm.noteList.push(data.data);
    //                 vm.curPage =1;
    //             }
    //         }
    //         vm.busy = false;
    //       });
    // })();

    // vm.foodList = [];
    // vm.foodTypes = homeService.getAllFoodType();

    // vm.selectedMerchant = angular.fromJson(sessionStorage.getItem('selectedMerchant'));


    // homeService.getFoodListByMerchantId(vm.selectedMerchant.mid).then(function(data){
    //     console.log(data);
    //     if(data.data.code == 200){
    //         vm.foodList = data.data.data;
    //     }
    // });


    // ///获取某个类型的所有菜品
    // vm.getFoodListByFoodType = function(foodTypeId){
    //     console.log("获取 类型"+ foodTypeId+"的菜品列表");
        
    //     homeService.getFoodListByMerchantIdAndFoodType(vm.selectedMerchant.mid, foodTypeId).then(function(data){
    //        if(data.data.code ==200){
    //            vm.foodList = data.data.data;
    //        }
    //     });
    // }

    // ///点击菜品，添加购物车
    // vm.addShoppingCart = function($index){
    //     var selectedFood = vm.foodList[$index];
    //     /// 添加购物车中
    //     $rootScope.addFood(selectedFood);
    // }


}

module.exports = noteListController;