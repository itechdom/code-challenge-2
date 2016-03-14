var template = require('./app.html');
let appComponent = function(){
    return{
        restrict: 'E',
            replace: true,
            template,
            scope:{
            },
            controller:function(appService,$scope,$q){
                var categories = appService.getCategories();
                var sub;
                var posts;
                $scope.categories = categories;
                $scope.data = {};
                $scope.firstPostScores = [];

                $scope.$watch('data.categorySelect',function(nVal,oVal){

                    //populate subreddits
                    sub = appService.getSubredditsByCategory(nVal);
                    $scope.subreddits = sub;



                    //populate first graph (category graph with first post score from each subreddit)
                    var qPosts = [];
                    sub.forEach((s)=>{
                        qPosts.push(appService.getPostsBySubreddit(s.name));
                    });
                    $q.all(qPosts).then((data)=>{
                        //get the score of the first post in each subreddit, with the subreddit name included;
                        data.forEach((d,index)=>{
                            $scope.firstPostScores.push({score:d[0].score,subreddit:sub[index]});
                        })
                    })
                })       
                $scope.$watch('data.subredditSelect',function(nVal,oVal){

                    if(nVal){
                        appService.getPostsBySubreddit(nVal).then((data)=>{

                        })
                    }

                }) 
            }
    }
}
module.exports = appComponent;
