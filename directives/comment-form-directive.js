(function () {
    'use strict';

    function commentForm() {
        debugger;

        return {
            restrict: 'A',
            scope: true,
            templateUrl: 'views/directives/comment-form-directive.html'
        };
    }

    angular.module('theStyleApp.directives')
        .directive('commentForm', [commentForm]);
}());