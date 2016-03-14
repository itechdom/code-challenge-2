import contentWrapperComponent from './contentWrapper/contentWrapper.component.js';
import sideWrapperComponent from './sideWrapper/sideWrapper.component.js';
import itemWrapperComponent from './itemWrapper/itemWrapper.component.js';


	let componentWrapper = angular.module('componentWrapper', [
			])
		.directive('contentWrapper',contentWrapperComponent)
		.directive('sideWrapper',sideWrapperComponent)
		.directive('itemWrapper',itemWrapperComponent)

	export default componentWrapper;
