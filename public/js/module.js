'use strict';

var app = angular.module('routerApp', ['ui.router', 'ui.materialize']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl'
  })

  $urlRouterProvider.otherwise('/');
})

app.filter('titlecase', function() {
  return function(input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  }
});
