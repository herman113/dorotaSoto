'use strict';

describe('Component: mainCTABtn', function() {
  // load the component's module
  beforeEach(module('dorotaSotoApp.mainCTABtn'));

  var mainCTABtnComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    mainCTABtnComponent = $componentController('mainCTABtn', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
