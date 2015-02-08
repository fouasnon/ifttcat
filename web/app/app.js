'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'mgcrea.ngStrap.modal', 'mgcrea.ngStrap.aside', 'mgcrea.ngStrap.tooltip' 
]).
config(['$routeProvider', '$sceProvider', '$locationProvider', function($routeProvider, $sceProvider, $locationProvider) {
    /* Whitelist all bound external resources.
     * Was the default before angular 1.2.0.
     * Might be nice to use later .
     */
    $sceProvider.enabled(false);

    /* Use Browser push state api instead of hashtags */
//$locationProvider.html5Mode(true);

    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
      })
      .when('/channels', {
        templateUrl: 'views/channels.html',
      })
      .when('/api', {
        templateUrl: 'views/api.html',
      })
      .when('/pricing', {
        templateUrl: 'views/pricing.html',
      })
      .when('/imeow', {
        templateUrl: 'views/imeow.html',
      })
      .otherwise({
        redirectTo: '/home'
      });

}]);
