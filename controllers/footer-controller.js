(function() {
    'use strict';

    function FooterController(posts, $scope) {
        posts.getLatestCommented()
            .then(function(postsResult) {
                $scope.latestCommented = postsResult;
            });

        posts.getLatestSeven()
            .then(function(postsResult) {
                $scope.latestSevenPosts = postsResult;
            });

        posts.getLatestArchived()
            .then(function(postsResult) {
                $scope.latestArchived = postsResult;
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('FooterController', ['posts', '$scope', FooterController]);
}());
