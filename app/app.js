// import all dependencies the app rely on
var angular = require('angular');


//import all local depdendecies
var appService = require('./app.service.js').appService;
var cacheService = require('./app.service.js').cacheService;
var appComponent = require('./app.component.js');
var barGraphComponent = require('./components/barGraph.component.js');


angular.module('app',[])
       .service('appService',appService)
       .service('cacheService',cacheService)
       .directive('app',appComponent)
       .directive('barGraph',barGraphComponent)
