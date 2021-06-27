(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";       //user input of textbox goes here
  $scope.message = "";    //initialize message to empty string

  $scope.displayCheck = function () {         //function for button ngclick
    $scope.dishes = $scope.list.split(',');   //initialize array of dishes from list

    if($scope.list==""){                      //check if array is empty
      $scope.numberOfDishes = 0;
    }
    else{
      $scope.numberOfDishes = $scope.dishes.length;   //number of dishes same as array length
    }

    if($scope.numberOfDishes!=0){             //proceed if array is not empty

      for(var i=0;i<$scope.dishes.length;i++){
        if($scope.dishes[i]=="" || $scope.dishes[i]==" "){
          $scope.numberOfDishes--;
        }                               //handling case where there are no item between commas
      }

        if($scope.numberOfDishes<=3){
          $scope.message = "Enjoy!";          //display message if less than 3
        }
        else{
          $scope.message = "Too much!";       //display message if more than 3
        }

    }else{
      $scope.message = "Please enter data first"    //display message if array is empty
    }

  }

}

})();
