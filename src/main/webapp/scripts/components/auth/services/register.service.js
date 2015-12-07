'use strict';

angular.module('jhipsterOauthApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


