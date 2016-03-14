import angular from 'angular';
let template = require('./bar-chart.html');
var data = require('./bar-chart.data.json');

function BarChartCtrl($log, $scope, $timeout) {
    $log.info('BarChartCtrl loading...');
    $scope.currentYear = new Date().getFullYear();
    $scope.pastYear = (new Date().getFullYear() - 1);
    $scope.displayedYears = null;
    $scope.years = null;


    // Chart.js Data
    $scope.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                fillColor: 'rgba(220,220,220,0.5)',
                strokeColor: 'rgba(220,220,220,0.8)',
                highlightFill: 'rgba(220,220,220,0.75)',
                highlightStroke: 'rgba(220,220,220,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };


    function buildOptions() {
        $scope.options = {
            responsive: true,
            scaleBeginAtZero: true,
            scaleShowGridLines: false,
            scaleShowLabels: false,
            scaleGridLineColor: "#1A554F",
            scaleGridLineWidth: 0.5,
            // Number - The value jump in the hard coded scale
            scaleStepWidth: 1,
            // Number - The scale starting value
            scaleStartValue: 0,
            scaleLineColor: 'transparent',
            barShowStroke: false,
            barStrokeWidth: 1,
            showTooltips: false,
            barValueSpacing: 8,
            barDatasetSpacing: 1,
            onAnimationProgress: function () {
                var count = 0;
                this.eachBars(function (bar) {
                    bar.fillColor = "#31968C";
                    count++;
                });
            }
        };
    }



    function init() {
        buildOptions();
    }

    init();
}


let barChartComponent = function () {
    return {
        template: template,
        restrict: 'E',
        replace: true,
	scope:{},
        controller: BarChartCtrl
    };
};


let barChart = angular.module('barChart', [])
    .directive('mwiBarChart', barChartComponent)

export default barChart;
