/////**
//// * Created by lenovo on 2016/4/2.
//// */
var app = angular.module('app.service',['restangular']);
//app.factory("MessagesService",["Restanguar",function(Restangular){
//    var restAngular = Restangular.withConfig(function(Configurer){
//        Configurer.setBaseUrl('http://phptest.neonan.com/');
//    });
//    var articleApi = restAngular.oneUrl('article');
//    var registerApi = restAngular.all('register');
//    var loginOutApi  = restAngular.all('logiout');
//    var loginApi = restAngular.all('login');
//    var authEmailApi = restAngular.all('auth-email');
//    var articleDetailApi = restAngular.all('article:id');
//    var articleShareApi = restAngular.one('article','share');
//    var articleLikeApi = restAngular.one('article','like');
//    var articleCommentApi = restAngular.one('article','new_comment');
//    var videoApi = restAngular.all('video');
//    var videoDetailApi = restAngular.all('video');
//    var videoShareApi = restAngular.one('video','share');
//    var videoLikeApi = restAngular.one('video','like');
//    var videoCommentApi = restAngular.one('video','new_comment');
//    var linksApi = restAngular.all('links');
//    return {
//        getArticle:function(){
//            return articleApi.getList();
//        },
//        register:function(){
//            return registerApi.getList();
//        },
//        loginOut:function(){
//            return loginoutApi.getList();
//        },
//        login:function(){
//            return loginApi.getList();
//        },
//        authEmail:function(){
//            return authEmailApi.getList();
//        },
//        articleDetail:function(){
//            return articleDetailApi.getList();
//        },
//        articleShare:function(){
//            return articleShareApi.getList();
//        },
//        articleLike:function(){
//            return articleLikeApiApi.getList();
//        },
//        articleComment:function(){
//            return articleCommentApi.getList();
//        },
//        video:function(){
//            return videoApi.getList();
//        },
//        videoDetail:function(){
//        return videoDetailApi.getList();
//        },
//        videoShare:function(){
//            return videoShareApi.getList();
//        },
//        videoLike:function(){
//            return videoLikeApi.getList();
//        },
//        videoComment:function(){
//            return videoCommentApi.getList();
//        },
//        links:function(){
//            return linksApi.getList();
//        }
//    }
//}]);