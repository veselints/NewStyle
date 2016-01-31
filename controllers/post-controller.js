(function() {
    'use strict';

    function PostController(posts, $routeParams) {
        var vm = this;
        var currentId = $routeParams.id;

        posts.getById(currentId)
            .then(function(postResult) {
                vm.post = postResult;
                vm.post.numberOfComments = vm.post.comments.length;
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('PostController', ['posts', '$routeParams', PostController]);
}());
