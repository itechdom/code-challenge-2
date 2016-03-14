'use strict';
/**
 * @ngdoc overview
 * @name coreGuide
 * @module coreGuide
 *
 * @description
 * Main module of the application. This should only include
 * modules needed for this application. No actual logic
 * should live in here
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import guideWrapper from './guideWrapper/guideWrapper';
import componentWrapper from './componentWrapper/componentWrapper';

let appCommon = angular.module('app.common', [
    guideWrapper.name,
    componentWrapper.name
  ])

export default appCommon;
