'use strict';

angular.module('testApp')
  .controller('RegisterCtrl', ['$scope', 'api',
    function ($scope, api) {
      $scope.user = {};

      $scope.onRegisterClick = function() {
        api.registerUser($scope.user).then(function(response) {
          console.log('user registered', response);
        });
      };
    }]);
