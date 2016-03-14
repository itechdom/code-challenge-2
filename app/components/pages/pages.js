//grab template from src
//TODO: we can grab more pages here and attach them?
//Or it can be more generic
let template = require('./pages.html');

let pagesLinks = {
    title: 'pages',
    href: '#pages',
    activeWhen: 'pages',
}
var deps = [];
pagesLinks['sublinks'] = [];
deps.map((dep)=>{
	pagesLinks.sublinks.push({title:dep.name,href:`#${dep.name}`})
});


let pagesComponent = function () {
    return {
        template,
        restrict: 'E',
        replace: true,
        controller: pagesCtrl
    };
};

let pages = angular.module('pages', [
])
    .directive('mwiPages', pagesComponent)
    .value('pagesLinks', pagesLinks)

function pagesCtrl($scope, pagesLinks) {
    $scope.pagesLinks = pagesLinks;
}
export default pages;
