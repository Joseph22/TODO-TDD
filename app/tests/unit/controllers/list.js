require('angular');
require('angular-mocks');
require('app');

describe('TodoController list Tests',function(){

  // scope –hold items on the controller
  var scope = {};

  beforeEach(function(){
    angular.mock.module('todo');

    //inject – access angular controller
    inject(function($controller){
      //$controller – initialize controller with test scope
      $controller('TodoController',{$scope:scope});
    });
  });

  it('should define a list object',function(){
    expect(scope.list).toBeDefined();
  });

  it('should define a list object: 0',function(){
    expect(scope.list[0]).toEqual('test');
  });

  it('should define a list object: 1',function(){
    expect(scope.list[1]).toEqual('execute');
  });

  it('should define a list object: 2',function(){
    expect(scope.list[2]).toEqual('refactor');
  });

  describe('when using a to-do list',function(){
    beforeEach(function(){
      scope.add('repeat');
    });

    it('should add item to last item in list',function(){
        var lastIndex = scope.list.length - 1;
        expect(scope.list[lastIndex]).toEqual('repeat');
    });

    it('should remove item to last item in list',function(){
        scope.remove('repeat');
        var lastIndex = scope.list.length - 1;
        expect(scope.list[lastIndex]).toEqual('refactor');
    });
  });
});
