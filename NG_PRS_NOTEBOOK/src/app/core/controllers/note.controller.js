noteController.$inject = ['$cookies','$rootScope','noteService']
function noteController($cookies,$rootScope,noteService){

    
    var vm = this;

    vm.curPage = 0;
    vm.noteList = [];
    
    vm.isNoteListEmpty = false;

    // noteService.getNoteListByCustomerId("WUJA13", function( data,err){
    //     if(err){
    //         console.error(err);
    //         vm.isNoteListEmpty = true;
    //     }else{
    //         if(data.data){
    //             vm.noteList = data.data;
    //         }
    //     }
    // });

    vm.enterNoteItem = function(noteItem){
        
    };

    vm.busy = false;
    vm.noData = false;
    vm.nextPage = function(){
        vm.busy = true;
        noteService.getNoteListSortByDate(vm.curPage ,function(err,data){
            if(err){
                console.error(err);
            }else{
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
    //     noteService.getNoteListSortByDate(0 ,function(err,data){
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

module.exports = noteController;