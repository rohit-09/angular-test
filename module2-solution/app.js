(function () {
  'use strict'

  angular.module('CheckOffShoppingList' ,[])
  .controller('CheckOffController1', CheckOffController1)
  .controller('CheckOffController2', CheckOffController2)
  .service('CheckOffService', CheckOffService);

  CheckOffController1.$inject = ['CheckOffService'];
  function CheckOffController1(CheckOffService) {
    var toBuy = this;

    toBuy.items = [
      { item_name: "bread",
        item_quantity: 7
      },
      { item_name: "detergent",
        item_quantity: 2
      },
      { item_name: "tea bags",
        item_quantity: 5
      },
      { item_name: "tissues",
        item_quantity: 1
      },
      { item_name: "sanitizer",
        item_quantity: 3
      },
    ];

    toBuy.moveToBought = function (itemIndex, name, quantity) {
      CheckOffService.addItem(name, quantity);
      toBuy.items.splice(itemIndex, 1);
    }

  }



  CheckOffController2.$inject = ['CheckOffService'];
  function CheckOffController2(CheckOffService) {
    var rdBought = this;

    rdBought.items = [];
    rdBought.items = CheckOffService.getItems();


  }

  function CheckOffService() {

    var service = this;

    var servItems = [];

    service.addItem = function (name, quantity) {
      var item = {item_name: name,
                  item_quantity: quantity
                 };
      servItems.push(item);
    }

    service.removeItem = function (index) {
      items.splice(index, 1);
    }

    service.getItems = function () {
      return servItems;
    }

  }

}())
