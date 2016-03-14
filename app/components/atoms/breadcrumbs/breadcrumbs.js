import angular from 'angular';
let template = require('./breadcrumbs.html');

let breadcrumbsComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let breadcrumbs = angular.module('breadcrumbs', [])
    .directive('mwiBreadcrumbs', breadcrumbsComponent)

export default breadcrumbs;
