'use strict';

describe('injector2', function() {
  var providers;
  var injector;
  var providerInjector;

  beforeEach(module(function($provide, $injector) {
    providers = function(name, factory, annotations) {
      $provide.factory(name, extend(factory, annotations||{}));
    };
    providerInjector = $injector;
  }));//真正的注入点在哪里?只是假如

  beforeEach(inject(function($injector){
    injector = $injector;
  }));


  it('should inject providers', function() {
    providers('a', function() {return 'Mi';});
    providers('b', function(mi) {return mi+'sko';}, {$inject:['a']});
    expect(injector.get('b')).toEqual('Misko');
  });


});
