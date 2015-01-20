/* global $ */
'use strict';

angular.module('testApp')
  .service('api', ['$http', function ($http) {
    return {
      registerUser: function(data) {
        return $http ({
          method: 'POST',
          url: 'http://0.0.0.0:3000/api/people',
          data: $.param(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(
          function(result) {
            return result;
          }
        ).catch(
          function(error) {
            return error;
          }
        );
      },

      loginUser: function(data) {
        return $http ({
          method: 'POST',
          url: 'http://0.0.0.0:3000/api/people/login',
          data: $.param(data),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(
          function(result) {
            return result;
          }
        ).catch(
          function(error) {
            return error;
          }
        );
      },

      getAllUsersItems: function(data) {
        return $http ({
          method: 'GET',
          url: 'http://0.0.0.0:3000/api/people/' + data.userId + '/items',
          params: {
            access_token: data.id
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(
          function(result) {
            return result;
          }
        ).catch(
          function(error) {
            return error;
          }
        );
      },

      createItem: function(user, data) {
        return $http ({
          method: 'POST',
          url: 'http://0.0.0.0:3000/api/people/' + user.userId + '/items',
          params: {
            access_token: user.id
          },
          data: $.param({
            name: data.name
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(
          function(result) {
            return result;
          }
        ).catch(
          function(error) {
            return error;
          }
        );
      }

    };
  }]);

