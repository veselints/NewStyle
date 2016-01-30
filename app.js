(function () {
    'use strict';

    function config($routeProvider) {
        var PARTIALS_PREFIX = 'views/partials/';
        var CONTROLLER_AS_VM = 'vm';

        $routeProvider
        .when('/', {
            templateUrl: PARTIALS_PREFIX + 'home.html',
            controller: 'HomeController',
            controllerAs: CONTROLLER_AS_VM
        })
        .otherwise({ redirectTo: '/' });
    }

    angular.module('theStyleApp.services', []);
    angular.module('theStyleApp.directives', []);
    // angular.module('theStyleApp.filters', []);
    angular.module('theStyleApp.controllers', ['theStyleApp.services']);

    angular.module('theStyleApp', ['ngRoute', 'ngCookies', 'theStyleApp.controllers', 'theStyleApp.directives']) //'theStyleApp.filters'
        .config(['$routeProvider', config])
        .constant('baseServiceUrl', 'https://fast-badlands-79260.herokuapp.com/api/'); // Chage this when you migrate to heroku
}());