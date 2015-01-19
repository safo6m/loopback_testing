'use strict';

angular.module('testApp')
  .controller('MainCtrl', ['$scope', 'api',
    function ($scope, api) {

      $scope.onRegisterClick = function() {
        api.registerUser().then(function(response) {
          console.log('user registered', response);
        });
      };

      $scope.onLoginClick = function() {
        api.loginUser().then(function(response) {
          console.log('user logged in', response);
        });
      };

    }]);
