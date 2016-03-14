'use strict';

/**
 * @ngdoc directive
 * @name codeSample
 * @module patternLibrary
 *
 * @description
 * Takes the transcluded content and shows the code in a <code> block
 * with syntax highlighting
 */
import template from './itemWrapper.html';
let itemWrapperComponent =  function() {
    return {
      template,
      restrict: 'E',
      transclude: true,
      scope: {
        modules: '=',
        currentModule: '='
      }
    };
};
export default itemWrapperComponent;
