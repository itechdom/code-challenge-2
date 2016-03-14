import angular from 'angular';
let template = require('./base.html');

let baseComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};

let base = angular.module('base', [])
    .directive('mwiBase', baseComponent)

export default base;
