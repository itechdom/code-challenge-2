// import all dependencies the app rely on
var angular = require('angular');
var d3 = require('d3');
var nvd = require('nvd3')
var ngNvd3 = require('angular-nvd3');

//so one select box with category
//another select box that will update by going through the list and returning back the subreddits

//import the service
var appService = require('./app.service.js').appService;
var cacheService = require('./app.service.js').cacheService;
var appComponent = require('./app.component.js');

angular.module('app',['nvd3'])
       .service('appService',appService)
       .service('cacheService',cacheService)
       .directive('app',appComponent)
