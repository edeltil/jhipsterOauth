 'use strict';

angular.module('jhipsterOauthApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterOauthApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterOauthApp-params')});
                }
                return response;
            }
        };
    });
