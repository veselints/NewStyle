(function() {
    'use strict';

    function ResultsController(posts, $routeParams, $location) {
        var vm = this;
        var currentQuery = $routeParams.query;
        var locationObject = $location.search();
        var pageNumber = Number(locationObject.page) || 1;
        

        posts.getByQuery(currentQuery, pageNumber)
            .then(function(postsResult) {
                vm.postsResult = postsResult.posts;
                vm.commented = postsResult.commented;
                vm.posted = postsResult.posted;
                var numberOfPosts = postsResult.count;

                var currentNumberOfPages = Math.floor(numberOfPosts / 7);
                if (numberOfPosts % 7 !== 0) {
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
                        query: currentQuery,
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

                vm.currentQuery = currentQuery;
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('ResultsController', ['posts', '$routeParams', '$location', ResultsController]);
}());
