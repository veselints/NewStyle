(function () {
    'use strict';

    function posts(data) {
        function getLatest() {
            return data.get('posts/latest');
        }

        function getLatestCommented() {
            return data.get('posts/latestcommented');
        }

        function getLatestSeven() {
            return data.get('posts/latestseven');
        }

        function getLatestArchived() {
            return data.get('posts/latestarchived');
        }

        function getCount() {
            return data.get('posts/count');
        }

        function getBySubcategory(subcategory) {
            return data.get('posts/bysubcategory/' + subcategory);
        }

        function getById(id) {
            return data.get('posts/' + id);
        }

        return {
            getLatest: getLatest,
            getLatestCommented: getLatestCommented,
            getLatestSeven: getLatestSeven,
            getLatestArchived: getLatestArchived,
            getCount: getCount,
            getBySubcategory: getBySubcategory,
            getById: getById
        };
    }

    angular.module('theStyleApp.services')
        .factory('posts', ['data', posts]);
}());