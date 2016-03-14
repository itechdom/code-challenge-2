//grab template from src
//TODO: we can grab more atoms here and attach them?
//Or it can be more generic
let template = require('./atoms.html');

import text from './text/text';
import buttons from './buttons/buttons';
import tables from './tables/tables';
import inputs from './inputs/inputs';
import pagination from './pagination/pagination';
import breadcrumbs from './breadcrumbs/breadcrumbs';
import icons from './icons/icons';
import loader from './loader/loader';

let deps = [text,buttons,tables,inputs,pagination,breadcrumbs,icons,loader]


let atomsLinks = {
    title: 'atoms',
    href: '#atoms',
    activeWhen: 'atoms',
}

atomsLinks['sublinks'] = [];
deps.map((dep)=>{
	atomsLinks.sublinks.push({title:dep.name,href:`#${dep.name}`})
});

let atomsComponent = function () {
    return {
        template,
        restrict: 'E',
        replace: true,
	scope:{
		showSideNav:"@"
	},
        controller: atomsCtrl
    };
};

let atoms = angular.module('atoms', [
    text.name,
    buttons.name,
    inputs.name,
    pagination.name,
    breadcrumbs.name,
    tables.name,
    icons.name,
    loader.name
])
    .directive('mwiAtoms', atomsComponent)
    .value('atomsLinks', atomsLinks)

function atomsCtrl($scope, atomsLinks) {
    $scope.atomsLinks = atomsLinks;
}

export default atoms;
