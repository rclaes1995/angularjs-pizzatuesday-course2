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
}
