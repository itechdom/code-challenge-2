'use strict';

//Angular dependencies
import angular from 'angular'
import uiRouter from 'angular-ui-router';
require('angular-bootstrap');

//import all views
/**
 *
 * Overview
 *
 **/
import overview from './overview/overview.js';

/**
 *
 * DNA 
 *
 **/
import dna from "./dna/dna.js";



/**
 *
 * Atoms
 *
 **/
import atoms from "./atoms/atoms.js";




/**
 *
 * Molecules
 *
 **/
import molecules from "./molecules/molecules.js";

/**
 *
 * Pages 
 *
 **/
import pages from "./pages/pages.js";


/**
 *
 * Technologies 
 *
 **/
import technologies from "./technologies/technologies.js";



//store all links in an object to use it to populate navbar items
let deps = [overview,dna,atoms,molecules,pages,technologies]
var componentLinks = [];
deps.map((dep)=>{
	componentLinks.push({title:dep.name,href:`#${dep.name}`,activeWhen:`${dep.name}`})
});


let templates = angular.module('templates', [
		uiRouter,
		overview.name,
		atoms.name,
		molecules.name,
		dna.name,
		pages.name,
		technologies.name,
		"ui.bootstrap"
])
.value('componentLinks', componentLinks);


	export default templates;
