import angular from 'angular';
let template = require('./md-menu.html');

function mdMenuCtrl($log, $scope, $timeout) {

}

let mdMenuComponent = function () {
	return {
		template: template,
		restrict: 'E',
		replace: true,
		controller: mdMenuCtrl
	};
};


let mdMenu = angular.module('mdMenu', [])
.directive('mwiMdMenu', mdMenuComponent)

export default mdMenu;
