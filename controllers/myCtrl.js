(function() {
    'use strict';

    function myCtrl($scope) {
        $scope.number = "mamamam mu starararrarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr";
    }

    angular.module('theStyleApp.controllers')
        .controller('myCtrl', ['$scope', myCtrl]);
}());
