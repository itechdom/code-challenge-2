//grab template from src
//TODO: we can grab more overview here and attach them?
//Or it can be more generic
let template = require('./overview.html');

import about from './about/about.js';

let deps = [about]
let overviewLinks = {
    title: 'overview',
    href: '#overview',
    activeWhen: 'overview',
}
overviewLinks['sublinks'] = [];
deps.map((dep)=>{
	overviewLinks.sublinks.push({title:dep.name,href:`#${dep.name}`})
});



let overviewComponent = function () {
    return {
        template,
        restrict: 'E',
        replace: true,
        controller: overviewCtrl
    };
};

let overview = angular.module('overview', [
    about.name
])
    .directive('mwiOverview', overviewComponent)
    .value('overviewLinks', overviewLinks)

function overviewCtrl($scope, overviewLinks) {
    $scope.overviewLinks = overviewLinks;
}
export default overview;

