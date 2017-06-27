describe('pizzaService', function () {
  var pizzaService;
  var $httpBackend;

  beforeEach(module('app'));

  beforeEach(angular.mock.inject(function (_pizzaService_, _$httpBackend_) {
    pizzaService = _pizzaService_;
    $httpBackend = _$httpBackend_;
  }));

  it('should get the pizzas', function (done) {
    $httpBackend
      .expectGET('pizzas.json')
      .respond(200, {
        products: [
          { id: 123, name: 'Pizza Margherita' },
          { id: 456, name: 'Pizza Bolognese' }
        ]
      });

    pizzaService.getPizzas()
      .then(function (pizzas) {
        expect(pizzas).toEqual([
          { id: 123, name: 'Pizza Margherita' },
          { id: 456, name: 'Pizza Bolognese' }
        ]);
        done();
      });

    $httpBackend.flush();
  });
});
