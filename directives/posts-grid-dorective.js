(function () {
    'use strict';

    function postsgrid() {
        debugger;

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'views/directives/posts-grid-directive.html'
        };
    }

    angular.module('theStyleApp.directives')
        .directive('postsgrid', [postsgrid]);
}());