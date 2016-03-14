import angular from 'angular';
let template = require('./text.html');

let textComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};


let text = angular.module('text', [])
    .directive('mwiText', textComponent)

export default text;
