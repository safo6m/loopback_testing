/* global $ */
'use strict';

angular.module('testApp')
  .service('api', ['$http', function ($http) {
    return {
      registerUser: function() {
        var data = {
          firstname: 'mihael',
          lastname: 'safo',
          email: 'test@test.com',
          password: '123'
        };

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

      loginUser: function() {
        var data = {
          email: 'test@test.com',
          password: '123'
        };

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

    };
  }]);

