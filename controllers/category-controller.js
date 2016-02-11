(function() {
    'use strict';

    var categories = {
        cinema: "Cinema",
        concerts: "Concerts",
        pubs: "Pubs",
        museums: "Museums",
        skinnypeople: "Skinny people",
        badfood: "Bad food",
        pernikstyle: "Pernik style",
        boring: "Boring",
        hate: "Hate",
        gotojapan: "Go to Japan",
        space: "Space",
        machines: "Machines",
        medicine: "Medicine",
        cars: "Cars",
        bycicles: "Bycicles",
        formaleducation: "Formal education",
        trainings: "Trainings",
        children: "Children",
        volleyball: "Volleyball",
        football: "Football",
        hokey: "Hokey",
        ski: "Ski",
        hardware: "Hardware",
        software: "Software",
        middleware: "Middleware",
        furniture: "Furniture",
        electronics: "Electrinics",
        bashmaistor: "Bash Maistor",
        flowers: "Flowers",
        horticulture: "Horticulture",
        trees: "Trees"
    };

    function CategoryController(posts, $routeParams, $location) {
        var vm = this;
        var currentCategory = $routeParams.category;
        var locationObject = $location.search();
        var pageNumber = Number(locationObject.page) || 1;
        debugger;

        posts.getBySubcategory(currentCategory, pageNumber)
            .then(function(postsResult) {
                vm.postsResult = postsResult.posts;
                vm.subCategory = currentCategory;
                vm.commented = postsResult.commented;
                vm.posted = postsResult.posted;

                debugger;

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
                        query: currentCategory,
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
        .controller('CategoryController', ['posts', '$routeParams', '$location', CategoryController]);
}());