(function() {
    'use strict';

    function FooterController(posts, $scope) {
        posts.getLatestSeven()
            .then(function(result) {
                $scope.latestSevenPosts = result.posted;
                $scope.latestArchived = result.archived;
                $scope.latestCommented = result.commented;
                debugger;
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('FooterController', ['posts', '$scope', FooterController]);
}());
