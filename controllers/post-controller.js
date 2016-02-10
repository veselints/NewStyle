(function() {
    'use strict';

    function PostController(posts, $routeParams) {
        var vm = this;
        var currentId = $routeParams.id;

        var categories = {
            entertainment: ["Cinema", "Concerts", "Pubs", "Museums"],
            fasion: ["SkinnyPeople", "BadFood", "PernikStyle"],
            politics: ["Boring", "Hate"],
            technology: ["GoToJapan", "Space", "Machines", "Medicine"],
            automotive: ["Cars", "Bycicles"],
            education: ["FormalEducation", "Trainings", "Children"],
            sport: ["Volleyball", "Football", "Hokey", "Ski"],
            computing: ["Hardware", "Software", "Middleware"],
            homeandgarden: ["Furniture", "Electrinics", "BashMaistor", "Flowers", "Horticulture", "Trees"]
        };

        posts.getById(currentId)
            .then(function(postResult) {
                vm.post = postResult.post;
                vm.post.numberOfComments = vm.post.comments.length;

                vm.popularFour = postResult.popular;
                vm.recentFour = postResult.recent;
                vm.randomFour = postResult.popular;
                vm.relatedThree = vm.recentFour;

                var currentCategory = postResult.post.category;
                vm.subcategories = categories[currentCategory];
            });
    }

    angular.module('theStyleApp.controllers')
        .controller('PostController', ['posts', '$routeParams', PostController]);
}());
