'use strict';

/**
 * @ngdoc directive
 * @name nav
 * @module coreGuide
 *
 * @description
 * The `nav` directive creates our navigation bar.
 * Eventually we should enable this to accept a list of links
 * as a parameter, and display them in the navigation
 * appropriately.
 */
import template from './nav.html';

let navComponent = function(){
	return {
		template,
		restrict: 'A',
		replace: true,
		scope: {
			links: '=',
			active: '='
		},
		controller: NavCtrl
	};
};

function NavCtrl($scope,$rootScope,$state) {
	var selectedIndex;
	$rootScope.$on('$stateChangeSuccess', 
			function(event, toState, toParams, fromState, fromParams){  
				$scope.links.map((link,index)=>{
					if(link.activeWhen == toState.activeWhen){
						link['isActive'] = true;
						selectedIndex = index;
					}
				})
				$scope.links.map((link,index)=>{
					if(link.isActive && index != selectedIndex){
						link.isActive = false;
					}
				});
			})
}
export default navComponent;
