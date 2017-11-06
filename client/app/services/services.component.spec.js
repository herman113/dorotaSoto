'use strict';

describe('Component: ServicesComponent', function() {
  // load the controller's module
  beforeEach(module('hermotaMealsApp.services'));

  var ServicesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ServicesComponent = $componentController('services', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
