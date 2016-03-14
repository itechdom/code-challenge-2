import angular from 'angular';
let template = require('./tables.html');

let tablesComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true
    };
};

let tables = angular.module('tables', [])
    .directive('mwiTables', tablesComponent)

export default tables;
