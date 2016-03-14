var subreddits =  require('./subreddits.js');

var appService = function($q,cacheService){

    this.getGroupings = function(){
        return $q((resolve,reject)=>{
            cacheService.cache(subreddits);
            resolve(subreddits);
        })

    }
    this.getCategories = function(){
        var categories = subreddits.map((group)=>{
            return group.category;
        }).map(()=>{

        })
        console.log(categories);
    }
    this.getSubredditsByCategory = function(category){

    }
}
var cacheService = function(){

    this.data;
    this.cache = function(data){
            this.data = data;
    }
    this.isCached = function(){

    }

}

module.exports =  {appService,cacheService};
