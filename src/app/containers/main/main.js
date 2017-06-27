angular.module('app')
  .component('main', {
    templateUrl: 'app/containers/main/main.html',
    controller: MainController
  });

function MainController(pizzaService) {
  var vm = this;

  pizzaService.getPizzas()
    .then(function (pizzas) {
      vm.pizzas = pizzas;
    });

  vm.selectPizza = function (option) {
    vm.selectedPizza = option;
    vm.selectedCrust = null;
    vm.selectedSize = null;
  };

  vm.selectCrust = function (option) {
    vm.selectedCrust = option;
    vm.selectedSize = null;
  };

  vm.selectSize = function (option) {
    vm.selectedSize = option;
  };
}
