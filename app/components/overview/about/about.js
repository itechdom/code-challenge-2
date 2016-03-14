import angular from 'angular';
let mainTemplate = require('./about.html');

let aboutDocsComponent = function () {
    return {
        template: mainTemplate,
        restrict: 'E',
        replace: true
    };
};
let about = angular.module('about', [])
    .directive('mwiAboutDocs', aboutDocsComponent)
export default about;
