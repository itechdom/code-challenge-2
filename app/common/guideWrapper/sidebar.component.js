'use strict';

/**
 * @ngdoc directive
 * @name sideBar
 * @module coreGuide
 *
 * @description
 * The `sideBar` directive specifies creates our sidebar and
 * adds the necessary anchor links. Currently the linkData
 * attribute is expected to be an array of objects in the
 * following form:
		[
		  {
		    title: 'Link Title',
		    href: '#/page#anchorId',
		    sublinks: [
		      {
		        title: 'A Sublink',
		        href: '#/page#anchorId2'
		      }
		    ]
		  }
		]
 * If an array of sublinks is present, the directive will
 * display them.
 *
 * The directive controller adds a logo variable to the scope.
 * File path should be updated to reflect the proper filename
 * and location.
 */
import template from './sidebar.html';
let sideBarComponent =	function(){
		return {
			template,
			restrict 	: 'A',
			replace: true,
			scope: {
				linkData: '='
			},
			controller: SideBarCtrl
		};
};


function SideBarCtrl($scope) {
};

export default sideBarComponent;
