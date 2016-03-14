import angular from 'angular';
let template = require('./icons.html');

let iconsComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let icons = angular.module('icons', [])
    .directive('mwiIcons', iconsComponent)

export default icons;
