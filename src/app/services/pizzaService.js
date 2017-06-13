angular.module('app')
  .service('pizzaService', pizzaService);

function pizzaService($http) {
  this.getPizzas = function () {
    return $http.get('pizzas.json')
      .then(function (response) {
        return response.data.products;
      });
  };
}
