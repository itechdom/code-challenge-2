﻿import angular from 'angular';
let template = require('./doughnut-chart.html');
var data = require('./doughnut-chart.data.json');

function DoughnutChartCtrl($log, $scope, $timeout) {
	$log.info('DoughnutChartCtrl loading...');

	$scope.data = [
	{
		value: 300,
			color:'#F7464A',
			highlight: '#FF5A5E',
			label: 'Red'
	},
	{
		value: 50,
		color: '#46BFBD',
		highlight: '#5AD3D1',
		label: 'Green'
	},
	{
		value: 100,
		color: '#FDB45C',
		highlight: '#FFC870',
		label: 'Yellow'
	}
	];

	// Chart.js Options
	$scope.options =  {

		// Sets the chart to be responsive
		responsive: true,

		//Boolean - Whether we should show a stroke on each segment
		segmentShowStroke : true,

		//String - The colour of each segment stroke
		segmentStrokeColor : '#fff',

		//Number - The width of each segment stroke
		segmentStrokeWidth : 2,

		//Number - The percentage of the chart that we cut out of the middle
		percentageInnerCutout : 50, // This is 0 for Pie charts

		//Number - Amount of animation steps
		animationSteps : 100,

		//String - Animation easing effect
		animationEasing : 'easeOutBounce',

		//Boolean - Whether we animate the rotation of the Doughnut
		animateRotate : true,

		//Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale : false,

		//String - A legend template
		legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

	};

}


let doughnutChartComponent = function () {
	return {
		template: template,
		restrict: 'E',
		replace: true,
		scope:{},
		controller: DoughnutChartCtrl
	};
};


let doughnutChart = angular.module('doughnutChart', [])
.directive('mwiDoughnutChart', doughnutChartComponent)

export default doughnutChart;
