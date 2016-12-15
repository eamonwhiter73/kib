'use strict';

export default function routes($routeProvider) {
  'ngInject';

  $routeProvider.when('/ideas', {
    template: '<ideas></ideas>'
  });
}
