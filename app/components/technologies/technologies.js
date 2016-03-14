//grab template from src
//TODO: we can grab more technologies here and attach them?
//Or it can be more generic
let template = require('./technologies.html');

let technologiesLinks = {
    title: 'technologies',
    href: '#technologies',
    activeWhen: 'technologies',
}
var deps = [];
technologiesLinks['sublinks'] = [];
deps.map((dep)=>{
	technologiesLinks.sublinks.push({title:dep.name,href:`#${dep.name}`})
});


let technologiesComponent = function () {
    return {
        template,
        restrict: 'E',
        replace: true,
        controller: technologiesCtrl
    };
};

let technologies = angular.module('technologies', [
])
    .directive('mwiTechnologies', technologiesComponent)
    .value('technologiesLinks', technologiesLinks)

function technologiesCtrl($scope, technologiesLinks) {
    $scope.technologiesLinks = technologiesLinks;
}
export default technologies;

