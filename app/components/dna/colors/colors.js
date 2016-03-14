import angular from 'angular';
let template = require('./colors.html');

let colorsComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let colors = angular.module('colors', [])
    .directive('mwiColors', colorsComponent)

export default colors;
