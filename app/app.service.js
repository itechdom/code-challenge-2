var subreddits =  require('./subreddits.js');
var _ = require('lodash');

var appService = function($q,cacheService){

    this.getGroupings = function(){
        return $q((resolve,reject)=>{
            cacheService.cache(subreddits);
            resolve(subreddits);
        })
    }
    this.getCategories = function(){
        var arr = [];
        subreddits.map((group)=>{
            return group.category;
        }).map((category)=>{
            if(Array.isArray(category)){
                category.forEach((cat)=>{
                    arr.push(cat);
                })
            }
            else{
                arr.push(category);
            }
        })
        return _.uniq(arr);
    }
    this.getSubredditsByCategory = function(selectedCategory){

        var arr = subreddits.filter((group)=>{
            if(Array.isArray(group.category)){
                group.category.forEach((cat)=>{
                    return cat === selectedCategory;
                })
            }
            else{
                    return group.category === selectedCategory;
            }
        })
        return arr;
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
