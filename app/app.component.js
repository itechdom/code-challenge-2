var template = require('./app.html');
let appComponent = function(){
    return{
        restrict: 'E',
        replace: true,
        template,
        scope:{
        },
        controller:function(appService,$scope){
            var categories = appService.getCategories();
            var sub;
            $scope.categories = categories;
            $scope.data = {};
            $scope.$watch('data.categorySelect',function(nVal,oVal){
                sub = appService.getSubredditsByCategory(nVal);
                $scope.subreddits = sub;
            })       
    }
    }
}
module.exports = appComponent;
