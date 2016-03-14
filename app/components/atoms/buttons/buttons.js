import angular from 'angular';
let template = require('./buttons.html');

let buttonsComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let buttons = angular.module('buttons', [])
    .directive('mwiButtons', buttonsComponent)

export default buttons;
