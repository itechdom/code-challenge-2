import angular from 'angular';
import uiRouter from 'angular-ui-router';

//Or it can be more generic
let mainTemplate = require('./dna.html');

//import documentation components
import colors from './colors/colors.js';
import typography from './typography/typography.js';
import base from './base/base.js';

//sidebar links
let deps = [colors,typography,base]
let dnaLinks = {
	title: 'dna',
	href: '#dna',
	activeWhen: 'dna',
}
dnaLinks['sublinks'] = [];
deps.map((dep)=>{
	dnaLinks.sublinks.push({title:dep.name,href:`#${dep.name}`})
});



let dnaComponent = function () {
	return {
		template: mainTemplate,
		restrict: 'E',
		replace: true,
		scope:{
			showSideNav:'@'
		},
		controller: dnaCtrl

	};
};

let dna = angular.module('dna', [
		uiRouter,
		colors.name,
		typography.name,
		base.name
])
.directive('mwiDna', dnaComponent)
	.value('dnaLinks', dnaLinks)
.controller(dnaCtrl)
	function dnaCtrl($scope, dnaLinks) {
		$scope.dnaLinks = dnaLinks;
	}

export default dna;
