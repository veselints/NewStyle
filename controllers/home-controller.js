(function() {
    'use strict';

    function HomeController(posts) {
        var vm = this;

        posts.getLatest()
            .then(function(postsResult) {
                vm.latestElevenPosts = postsResult;
            });

        posts.getLatestCommented()
            .then(function(postsResult) {
                vm.latestCommented = postsResult;
            });

        posts.getLatestSeven()
            .then(function(postsResult) {
                vm.latestSevenPosts = postsResult;
            });

        posts.getLatestArchived()
            .then(function(postsResult) {
                vm.latestArchived = postsResult;
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('HomeController', ['posts', HomeController]);
}());
