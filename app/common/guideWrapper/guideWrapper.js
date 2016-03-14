import guideWrapperComponent from './guideWrapper.component';
import nav from './nav.component';
import sideBar from './sidebar.component';


let guideWrapper = angular.module('guideWrapper', [])
.directive('guideWrapper',guideWrapperComponent)
.directive('nav',nav)
.directive('sideBar',sideBar)

export default guideWrapper;
