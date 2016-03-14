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
import template from './contentWrapper.html';
let contentWrapperComponent =  function() {
    return {
      template,
      restrict: 'E',
      transclude: true,
      scope: {
      }
    };
};
export default contentWrapperComponent;
