'use strict';

angular
  .module('testApp', [
    'ngRoute'
    ])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })

        .when('/main', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })

        .when('/register', {
          templateUrl: 'views/register.html',
          controller: 'RegisterCtrl'
        })

        .otherwise({
          redirectTo: '/'
        });
    }
  ]);

