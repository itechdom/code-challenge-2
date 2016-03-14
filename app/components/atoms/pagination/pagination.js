import angular from 'angular';
let template = require('./pagination.html');

let paginationComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let pagination = angular.module('pagination', [])
    .directive('mwiPagination', paginationComponent)

export default pagination;
