var subreddits =  require('./subreddits.js');
var _ = require('lodash');

var appService = function($q,cacheService,$http){

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
    this.getPostsBySubreddit = function(subreddit){
        return $q((resolve,reject)=>{
            getSubredditFromExternalAPI(subreddit).then((response)=>{
                response = response.data.data.children.map((post)=>{    
                    return post.data;
                })
                resolve(response);
            })
        })
    }
    this.sortSubredditByTopPosts = function(subreddit){

        return subreddit.sort((a,b)=>{
            if(a.score > b.score){
                return -1;
            }
            if(a.score < b.score){
                return 1;
            }
            return 0;
        })
    }
    function getSubredditFromExternalAPI(subreddit){
        return $http.get(`https://www.reddit.com/r/${subreddit}.json`)
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
