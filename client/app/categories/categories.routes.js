'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/categories', {
    template: '<categories></categories>'
  });
}
