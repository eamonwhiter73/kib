import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './categories.routes';

export class CategoriesController {
  $http;
  socket;
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  onSearchChange() {
    console.log('found some things in function');

    document.getElementsByClassName('switch')[0].innerHTML = 'Searching...';
    document.getElementsByClassName('switch')[0].disabled = true;

    var namer;
    var vrows = document.getElementsByName('thingname');
    console.log(this.vrows);
    var truth = false;

    for(namer = 0; namer < vrows.length; namer++) {
      console.log('found some things in for loop');
      console.log(this.newThing);
      console.log(vrows[namer].textContent);
      if(this.newThing === vrows[namer].children[0].textContent) {
        console.log('found some things');
        vrows[namer].style.display = 'block';      // Hide
        truth = true;
      }
      else {
        vrows[namer].style.display = 'none';
      }
    }

    if(truth) {
      document.getElementsByClassName('switch')[0].innerHTML = 'Search';
      document.getElementsByClassName('switch')[0].disabled = true;
    }

    if(this.newThing === '') {
      for(namer = 0; namer < vrows.length; namer++) {
          vrows[namer].style.display = 'block';      // Hidess
      }
    }
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });

    document.getElementsByClassName('switch')[0].disabled = true;
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
      document.getElementsByClassName('switch')[0].innerHTML = 'Search';
      document.getElementsByClassName('switch')[0].disabled = true;
    }
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}

export default angular.module('karmaincApp.categories', [ngRoute])
  .config(routing)
  .component('categories', {
    template: require('./categories.html'),
    controller: CategoriesController
  })
  .name;
