/////**
//// * Created by lenovo on 2016/4/2.
//// */
var app = angular.module('app.service',['restangular']);
app.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://phptest.neonan.com/');
});
app.factory("MessagesService",["Restanguar",function(Restangular){
    //var articleApi = Restangular.one('article');
    //var registerApi = Restangular.one('register');
    //var loginOutApi  = Restangular.one('loginout');
    //var loginApi = Restangular.one('login');
    //var authEmailApi = Restangular.one('auth-email');
    //var articleDetailApi = Restangular.all('article');
    //var articleShareApi = Restangular.one('article');
    //var articleLikeApi = Restangular.one('article');
    //var articleCommentApi = Restangular.one('article');
    //var videoApi = Restangular.one('video');
    //var videoDetailApi = Restangular.one('video');
    //var videoShareApi = Restangular.one('video');
    //var videoLikeApi = Restangular.one('video');
    //var videoCommentApi = Restangular.one('video');
    //var linksApi = Restangular.one('links');
    //var adsApi = Restangular.one('article_ads');
    //var allAdsApi = Restangular.one('ads');
    //var adsShowApi = Restangular.one('ads/show');

    return {
        getArticle:function(param){
            return Restangular.one('article').get(param);
        },
        register:function(param){
            return Restangular.one('register').customPOST(param);
        },
        loginOut:function(){
            return Restangular.one('logout').get();
        },
        login:function(param){
            return Restangular.one('login').customPOST(param);
        },
        authEmail:function(param){
            return Restangular.one('auth_email',param).get();
        },
        articleDetail:function(param){
            return Restangular.one('article',param).get();
        },
        articleShare:function(param){
            return Restangular.one('article','shared').customPUT(param);
        },
        articleLike:function(param){
            return Restangular.one('article','like').customPUT(param);
        },
        articleComment:function(param){
            return Restangular.one('article','new_comment').customPUT(param);
        },
        video:function(){
            return Restangular.one('video').get();
        },
        videoDetail:function(param){
        return Restangular.one('video',param).get();
        },
        videoShare:function(param){
            return Restangular.one('video','shared').customPUT(param);
        },
        videoLike:function(param){
            return Restangular.one('video','like').customPUT(param);
        },
        videoComment:function(param){
            return Restangular.one('video','new_comment').customPUT(param);
        },
        links:function(){
            return Restangular.one('links').get();
        },
        articleAds:function(){
            return Restangular.one('article_ads').get();
        },
        ads:function(){
            return Restangular.one('ads').get();
        },
        adsShow:function(param){
            return Restangular.one('ads/show',param).get();
        },
        users:function(){
            return Restangular.one('users').get();
        },
        update:function(param){
            return Restangular.one('update').customPUT(param);
        },
        resetPwd:function(param){
            return Restangular.one('reset_password').customPUT(param);
        },
        invite: function (param) {
            return  Restangular.one('invite').get();
        },
        banner: function () {
            return  Restangular.one('banner').get();
        },
        small:function(){
            return  Restangular.one('small').get();
        },
        handlPick:function(){
            return Restangular.one('hand-pick').get();
        }
    }
}]);