'use strict';

angular.module('testApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', 'api',
    function ($rootScope, $scope, api) {
      $scope.user = {};

      $scope.onLoginClick = function() {
        api.loginUser($scope.user).then(function(response) {
          console.log('user logged in', response);
          $rootScope.currentUser = response.data;
        });
      };
    }]);
