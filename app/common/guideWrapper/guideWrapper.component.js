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
import template from './guideWrapper.html';
let guideWrapperComponent =  function() {
    return {
      template,
      restrict: 'E',
      transclude: true,
      scope: {
        modules: '=',
        currentModule: '='
      },
      controller:guideCtrl
    };
};
function guideCtrl($scope){
}
export default guideWrapperComponent;
