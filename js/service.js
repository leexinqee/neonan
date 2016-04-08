/////**
//// * Created by lenovo on 2016/4/2.
//// */
var app = angular.module('app.service',['restangular']);
app.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://phptest.neonan.com/');
});
app.factory("MessagesService",["Restanguar",function(Restangular){
    var articleApi = Restangular.one('article');
    var registerApi = Restangular.one('register');
    var loginOutApi  = Restangular.one('loginout');
    var loginApi = Restangular.one('login');
    var authEmailApi = Restangular.one('auth-email');
    var articleDetailApi = Restangular.all('article');
    var articleShareApi = Restangular.one('article');
    var articleLikeApi = Restangular.one('article');
    var articleCommentApi = Restangular.one('article');
    var videoApi = Restangular.one('video');
    var videoDetailApi = Restangular.one('video');
    var videoShareApi = Restangular.one('video');
    var videoLikeApi = Restangular.one('video');
    var videoCommentApi = Restangular.one('video');
    var linksApi = Restangular.one('links');
    //var adsApi = Restangular.one('article_ads');
    //var allAdsApi = Restangular.one('ads');
    //var adsShowApi = Restangular.one('ads/show');

    return {
        getArticle:function(){
            return articleApi.get();
        },
        register:function(param){
            return registerApi.post(param);
        },
        loginOut:function(){
            return loginOutApi.get();
        },
        login:function(param){
            return loginApi.post(param);
        },
        authEmail:function(){
            return authEmailApi.post();
        },
        articleDetail:function(param){
            return articleDetailApi.get(param);
        },
        articleShare:function(param){
            return articleShareApi.put('shared',param);
        },
        articleLike:function(param){
            return articleLikeApi.put('like',param);
        },
        articleComment:function(param){
            return articleCommentApi.get('new_comment',param);
        },
        video:function(){
            return videoApi.get();
        },
        videoDetail:function(param){
        return videoDetailApi.get(param);
        },
        videoShare:function(param){
            return videoShareApi.put('shared',param);
        },
        videoLike:function(param){
            return videoLikeApi.put('like',param);
        },
        videoComment:function(param){
            return videoCommentApi.put('new_comment',param);
        },
        links:function(){
            return linksApi.get();
        }
    }
}]);