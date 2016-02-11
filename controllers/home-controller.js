(function() {
    'use strict';

    function HomeController(posts, $location) {
        var vm = this;
        var locationObject = $location.search();
        var pageNumber = Number(locationObject.page) || 1;

        posts.getLatest(pageNumber)
            .then(function(postsResult) {
                vm.latestElevenPosts = postsResult.posts;
                var numberOfPosts = postsResult.count;

                var currentNumberOfPages = Math.floor(numberOfPosts / 11);
                if (numberOfPosts % 11 !== 0) {
                    currentNumberOfPages++;
                }

                if (currentNumberOfPages < 2) {
                    vm.showPagination = false;
                } else {
                    vm.showPagination = true;
                }

                vm.pages = [];
                var selected = null;

                for (var i = 1; i <= currentNumberOfPages; i++) {
                    if (i == pageNumber) {
                        selected = 'selectedPaginationNumber';
                    }

                    vm.pages.push({
                        selected: selected,
                        num: i
                    });

                    selected = null;
                }

                if (pageNumber > 1) {
                    vm.previousPage = pageNumber - 1;
                } else {
                    vm.previousPage = 1;
                }

                if (pageNumber < currentNumberOfPages) {
                    vm.nextPage = pageNumber + 1;
                } else {
                    vm.nextPage = currentNumberOfPages;
                }
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('HomeController', ['posts', '$location', HomeController]);
}());
