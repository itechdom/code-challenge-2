import angular from 'angular';
let template = require('./date-picker.html');
var moment = require('moment');

function datePickerCtrl($scope, $timeout) {

	$scope.pageStateScopeId = 'page';

	$scope.inputValue = '';

	$scope.ranges = [
		'Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This month', 'Last month', 'Last 90 Days'
		];

	$scope.apply = function (name) {
		switch (name) {
			case 'Today':
				$scope.dirtyStartDate = moment(new Date()).startOf('day').toDate();
				$scope.dirtyEndDate = moment($scope.dirtyStartDate).endOf('day').toDate();
				break;
			case 'Yesterday':
				$scope.dirtyStartDate = moment(new Date()).subtract(1, 'days').startOf('day').toDate();
				$scope.dirtyEndDate = moment($scope.dirtyStartDate).endOf('day').toDate();
				break;
			case 'Last 7 Days':
				$scope.dirtyStartDate = moment(new Date()).subtract(7, 'days').startOf('day').toDate();
				$scope.dirtyEndDate = moment(new Date()).endOf('day').toDate();
				break;
			case 'Last 30 Days':
				$scope.dirtyStartDate = moment(new Date()).subtract(30, 'days').startOf('day').toDate();
				$scope.dirtyEndDate = moment(new Date()).endOf('day').toDate();
				break;
			case 'This month':
				$scope.dirtyStartDate = moment(new Date()).startOf('month').toDate();
				$scope.dirtyEndDate = moment(new Date()).endOf('day').toDate();
				break;
			case 'Last month':
				$scope.dirtyStartDate = moment(new Date()).subtract(1, 'month').startOf('month').startOf('day').toDate();
				$scope.dirtyEndDate = moment($scope.dirtyStartDate).endOf('month').endOf('day').toDate();
				break;
			case 'Last 90 Days':
				$scope.dirtyStartDate = moment(new Date()).subtract(90, 'days').startOf('day').toDate();
				$scope.dirtyEndDate = moment(new Date()).endOf('day').toDate();
				break;
			default:
				break;
		}

		$scope.commit();
	};

	$scope.visible = function (visible) {
		$scope.show = visible;
	};

	$scope.cancel = function () {
		$scope.visible(false);
		if ($scope.prevStartDate) {
			$scope.dirtyStartDate = new Date($scope.prevStartDate.getTime());
			$scope.dirtyEndDate = new Date($scope.prevEndDate.getTime());
		}
		else {
			$scope.dirtyStartDate = new Date($scope.startDate.getTime());
			$scope.dirtyEndDate = new Date($scope.endDate.getTime());
		}
		$scope.inputValue = getDateRangeString();
	}
	$scope.commit = function () {
		$scope.visible(false);
		$scope.startDate.setTime($scope.dirtyStartDate.getTime());
		$scope.endDate.setTime($scope.dirtyEndDate.getTime());

		$scope.prevStartDate = $scope.startDate;
		$scope.prevEndDate = $scope.endDate;


		$scope.inputValue = getDateRangeString();

		if (!!$scope.onChange)
			$scope.onChange();
	};

	$scope.adjust = function (set) {
		var diff = compare($scope.dirtyEndDate, $scope.dirtyStartDate);
		var badRange = (diff < 0 || diff > $scope.maxDays)

			if (set === 'end' && badRange)
				$scope.dirtyEndDate = moment($scope.dirtyStartDate).add($scope.maxDays, 'days').toDate();
			else if (set === 'start' && badRange)
				$scope.dirtyStartDate = moment($scope.dirtyEndDate).subtract($scope.maxDays, 'days').toDate();

		$scope.inputValue = getDateRangeString();
	};

	$scope.isStartDateDisabled = function (date, mode) {
		return compare($scope.dirtyEndDate, date) < 0;
	};

	$scope.isEndDateDisabled = function (date, mode) {
		return compare($scope.maxDate, date) < 0;
	};

	function compare(a, b) {
		var momentA = moment(a).startOf('day');
		var momentB = moment(b).startOf('day');
		return momentA.diff(momentB, 'days');
	}

	function getDateRangeString() {
		return moment($scope.dirtyStartDate).format('MM/DD/YY') + ' - ' + moment($scope.dirtyEndDate).format('MM/DD/YY')
	}

	function buildRanges() {
		var ranges = [];
		if ($scope.maxDays >= 0) ranges.push('Today');
		if ($scope.maxDays >= 1) ranges.push('Yesterday');
		if ($scope.maxDays >= 7) ranges.push('Last 7 Days');
		if ($scope.maxDays >= 30) ranges.push('Last 30 Days');
		if ($scope.maxDays >= 30) ranges.push('This month');
		if ($scope.maxDays >= 60) ranges.push('Last month');
		if ($scope.maxDays >= 90) ranges.push('Last 90 Days');
		$scope.ranges = ranges;
	}

	function load() {
		$scope.maxMinDate = moment($scope.maxDate).subtract($scope.maxDays, 'days').toDate();
		buildRanges();
		$scope.inputValue = getDateRangeString();
	}

	function init() {
		$timeout(load, true);
	}

	init();

}

let datePickerComponent = function () {
	return {
		template: template,
		restrict: 'E',
		replace: true,
		scope:{},
		controller: datePickerCtrl
	};
};


let datePicker = angular.module('datePicker', [])
.directive('mwiDatePicker', datePickerComponent)

export default datePicker;
