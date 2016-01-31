(function() {
    'use strict';

    function HomeController(posts) {
        var vm = this;

        posts.getLatest()
            .then(function(postsResult) {
                vm.latestElevenPosts = postsResult.posts;
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('HomeController', ['posts', HomeController]);
}());
