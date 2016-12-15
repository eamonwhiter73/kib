import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
  $http;
  socket;
  //awesomeThings = [];
  //newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    /*$scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });*/
  }

  /*onSearchChange () {
    console.log('found some things in function');

    document.getElementsByClassName('switch')[0].innerHTML = 'Searching...';
    document.getElementsByClassName('switch')[0].disabled = true;

    var namer;
    var vrows = document.getElementsByName("thingname");
    console.log(this.vrows);
    var truth = false;

    for(namer = 0; namer < vrows.length; namer++) {
      console.log('found some things in for loop')
      console.log(this.newThing);
      console.log(vrows[namer].textContent);
      if(this.newThing === vrows[namer].children[0].textContent) {
        console.log('found some things');
        vrows[namer].style.display = 'block';      // Hide
        truth = true;
      }
      else {
        vrows[namer].style.display = 'none';      // Hide
      }
    }

    if(truth) {
      document.getElementsByClassName('switch')[0].innerHTML = 'Search'
      document.getElementsByClassName('switch')[0].disabled = false;
    }
  }*/

  $onInit() {
    /*this.$http.get('/api/things')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });

      document.getElementsByClassName('switch')[0].disabled = true;*/
  }

  //addThing() {
    /*if(this.newThing) {
      this.$http.post('/api/things', {
        name: this.newThing
      });
      this.newThing = '';
      document.getElementsByClassName('switch')[0].innerHTML = 'Search';
      document.getElementsByClassName('switch')[0].disabled = true;
    }*/
  //}

  //deleteThing(thing) {
    //this.$http.delete(`/api/things/${thing._id}`);
  //}
}

export default angular.module('karmaincApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
