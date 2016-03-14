import angular from 'angular';
let template = require('./typography.html');

let typographyComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let typography = angular.module('typography', [])
    .directive('mwiTypography', typographyComponent)

export default typography;
