import angular from 'angular';
let template = require('./inputs.html');

let inputsController = function($scope){
    $scope.dt = new Date();
}
let inputsComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true,
        controller:inputsController
    };
};


let inputs = angular.module('inputs', [])
    .directive('mwiInputs', inputsComponent)

export default inputs;
