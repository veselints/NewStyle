(function() {
    'use strict';

    function posts(data) {
        function getLatest(page) {
            return data.get('posts/latest' + '?page=' + page);
        }
        
        function getLatestSeven() {
            return data.get('posts/latestseven');
        }

        function getCount() {
            return data.get('posts/count');
        }

        function getBySubcategory(subcategory, page) {
            return data.get('posts/bysubcategory/' + subcategory + '?page=' + page);
        }

        function getByQuery(query, pageNumber) {
            switch (query) {
                case 'lastcommented':
                    return data.get('posts/commented?page=' + pageNumber);
                case 'lastarchived':
                    return data.get('posts/archived?page=' + pageNumber);
                default:
                    return data.get('posts/query/' + query + '?page=' + pageNumber);
            }
        }

        function getById(id) {
            return data.get('posts/' + id);
        }

        function createNewComment(comment, currentId) {
            return data.post('posts/' + currentId, comment);
        }

        return {
            getLatest: getLatest,
            getLatestSeven: getLatestSeven,
            getCount: getCount,
            getBySubcategory: getBySubcategory,
            getById: getById,
            getByQuery: getByQuery,
            createNewComment: createNewComment
        };
    }

    angular.module('theStyleApp.services')
        .factory('posts', ['data', posts]);
}());
