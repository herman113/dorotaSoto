'use strict';
const angular = require('angular');

export class mainCTABtnComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('dorotaSotoApp.mainCTABtn', [])
  .component('mainBtn', {
    // template: '<button>Let\'s Eat</button>',
    bindings: { message: '<' },
    controller: mainCTABtnComponent,
    templateUrl: '/components/mainCTABtn/mainCTABtn.html'
  })
  .name;
