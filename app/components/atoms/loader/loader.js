import angular from 'angular';
let template = require('./loader.html');


let loaderComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let loader = angular.module('loader', [])
    .directive('mwiLoader', loaderComponent)

export default loader;
