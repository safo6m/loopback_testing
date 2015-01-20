'use strict';

angular.module('testApp')
  .controller('MainCtrl', ['$rootScope', '$scope', 'api',
    function ($rootScope, $scope, api) {

      $scope.items = [];
      $scope.item = {};

      $scope.createItem = function() {
        api.createItem($rootScope.currentUser, $scope.item).then(function(response) {
          console.log('item created:', response);
          refreshItems();
        });
      };

      var refreshItems = function() {
        api.getAllUsersItems($rootScope.currentUser).then(function(response) {
          console.log('item created:', response);
          $scope.items = response.data;
        });
      };

      refreshItems();

    }]);
