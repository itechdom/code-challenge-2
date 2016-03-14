//grab template from src
//TODO: we can grab more molecules here and attach them?
//Or it can be more generic
let template = require('./molecules.html');

import barChart from './bar-chart/bar-chart.js';
import doughnutChart from './doughnut-chart/doughnut-chart.js';
import mdMenu from './md-menu/md-menu.js';
import datePicker from './date-picker/date-picker.js';

let deps = [barChart,doughnutChart,mdMenu,datePicker]

let moleculesLinks = {
	title: 'molecules',
	href: '#molecules',
	activeWhen: 'molecules',
}
moleculesLinks['sublinks'] = [];
deps.map((dep)=>{
	moleculesLinks.sublinks.push({title:dep.name,href:`#${dep.name}`})
});


let moleculesComponent = function () {
	return {
		template,
		scope:{
			showSideNav:"@"
		},
		restrict: 'E',
		replace: true,
		controller: moleculesCtrl
	};
};

let molecules = angular.module('molecules', [
		barChart.name,
		doughnutChart.name,
		mdMenu.name,
		datePicker.name
])
.directive('mwiMolecules', moleculesComponent)
.value('moleculesLinks', moleculesLinks);

function moleculesCtrl($scope, moleculesLinks) {
	$scope.moleculesLinks = moleculesLinks;
}


export default molecules;
