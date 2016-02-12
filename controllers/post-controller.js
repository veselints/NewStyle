(function() {
    'use strict';

    function PostController(posts, $routeParams) {
        var vm = this;
        var currentId = $routeParams.id;

        var categories = {
            entertainment: ["cinema", "concerts", "pubs", "museums"],
            fasion: ["skinnypeople", "badfood", "pernikstyle"],
            politics: ["boring", "hate"],
            technology: ["gotojapan", "space", "machines", "medicine"],
            automotive: ["cars", "bycicles"],
            education: ["formalEducation", "trainings", "children"],
            sport: ["volleyball", "football", "hokey", "ski"],
            computing: ["hardware", "software", "middleware"],
            homeandgarden: ["furniture", "electrinics", "bashmaistor", "flowers", "horticulture", "trees"]
        };

        var width = $(document).width();
        var ratio = window.devicePixelRatio;
        if (width/ratio < 900) {
            $('.site-navigation').removeClass('visible-navigation');
            $('.site-navigation').addClass('hidden-navigation');
        }

        posts.getById(currentId)
            .then(function(postResult) {
                var i;
                vm.post = postResult.post;
                vm.post.numberOfComments = vm.post.comments.length;

                var firstLevel = [];
                var nested = [];
                for (i = 0; i < vm.post.numberOfComments; i++) {
                    var currentComment = vm.post.comments[i];
                    if (currentComment.parentId) {
                        nested.push(currentComment);
                    } else {
                        firstLevel.push(currentComment);
                    }
                }

                var numberOfNested = nested.length;
                for (i = 0; i < numberOfNested; i++) {
                    var currentNestedComment = nested[i];
                    currentNestedComment.nested = true;
                    var currentNestedCommentParentId = currentNestedComment.parentId;

                    var indexes = $.map(firstLevel, function(obj, index) {
                        if (obj._id == currentNestedCommentParentId) {
                            return index;
                        }
                    });
                    var resultIndex = indexes[0];

                    firstLevel.splice(resultIndex + 1, 0, currentNestedComment);
                }
                vm.post.comments = firstLevel;

                vm.popularFour = postResult.popular;
                vm.recentFour = postResult.recent;
                vm.randomFour = postResult.popular;
                vm.relatedThree = vm.recentFour;

                var currentCategory = postResult.post.category;
                vm.subcategories = categories[currentCategory];
                vm.commentTobeRepliedId = null;
            });


        vm.addComment = function(comment) {
            //Validations!!!!!!!!


            
            comment.parentId = vm.commentTobeRepliedId;
            posts.createNewComment(comment, currentId)
                .then(function() {
                    var newSavedComment = $.extend(true, {}, comment);
                    $("#authorName").val('');
                    $("#avatar").val('');
                    $("#text").val('');
                    if (vm.commentTobeRepliedId) {
                        var indexes = $.map(vm.post.comments, function(obj, index) {
                            if (obj._id == vm.commentTobeRepliedId) {
                                return index;
                            }
                        });
                        var resultIndex = indexes[0];
                        newSavedComment.nested = true;
                        vm.post.comments.splice(resultIndex + 1, 0, newSavedComment);
                    } else {
                        vm.post.comments.push(newSavedComment);
                    }
                    vm.commentTobeRepliedId = null;
                });
        };

        vm.setParentComment = function(index) {
            vm.commentTobeRepliedId = vm.post.comments[index]._id;
            $("#authorName").focus();
        };
    }

    angular.module('theStyleApp.controllers')
        .controller('PostController', ['posts', '$routeParams', PostController]);
}());
