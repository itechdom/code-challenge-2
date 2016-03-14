var template = require('./app.html');
let appComponent = function(){
    return{
        restrict: 'E',
        replace: true,
        template,
        scope:{
        },
        controller:function(appService,$scope){
            var groupings = appService.getGroupings();
            groupings.then((groupings)=>{
                $scope.groupings = groupings;
            })
            var categories = appService.getCategories();
        }
    }
}
module.exports = appComponent;
