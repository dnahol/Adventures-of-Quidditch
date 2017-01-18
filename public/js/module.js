'use strict';

var app = angular.module('routerApp', ['ui.router', 'ui.materialize']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl'
  })
  .state('scene1', {
    url: '/scene1',
    templateUrl: '/html/scene1.html',
    controller: 'scene1Ctrl'
  })
  .state('scene2', {
    url: '/scene2',
    templateUrl: '/html/scene2.html',
    controller: 'scene2Ctrl'
  })
  .state('scene3', {
    url: '/scene3',
    templateUrl: '/html/scene3.html',
    controller: 'scene3Ctrl'
  })
  .state('scene4', {
    url: '/scene4',
    templateUrl: '/html/scene4.html',
    controller: 'scene4Ctrl'
  })
  .state('scene5', {
    url: '/scene5',
    templateUrl: '/html/scene5.html',
    controller: 'scene5Ctrl'
  })

  $urlRouterProvider.otherwise('/');
})

app.filter('titlecase', function() {
  return function(input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  }
});
