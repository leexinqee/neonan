var app = angular.module('app.service',['restangular']);
app.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://phptest.neonan.com/');
    //请求拦截
    //RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
    //
    //});
});

app.factory("toolService", function(){
    return {
        // 根据文章详情上下页的路径解析出文章的id
        parserArticleId : function(url){
            var tempArr = url.split("/");
            return tempArr[tempArr.length-1];
        }
    }
});

app.service("MessagesService",["Restangular",function(Restangular){
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
            return Restangular.one('article','like').customPOST(param);
        },
        articleComment:function(param){
            return Restangular.one('article','new_comment').customPUT(param);
        },
        video:function(param){
            return Restangular.one('video').get(param);
        },
        videoDetail:function(param){
            return Restangular.one('video',param).get();
        },
        videoShare:function(param){
            return Restangular.one('video','shared').customPUT(param);
        },
        videoLike:function(param){
            return Restangular.one('video','like').customPOST(param);
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
        // ads hello test
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
        },
        category:function(){
            return Restangular.one('category').get();
        },
        album:function () {
            return Restangular.one('album').get();
        },
        captcha:function(target){
            return Restangular.one('captcha').get(target);
        },
        token:function(){
          return Restangular.one('token').get();
        },
        smsRegister:function(param){
             return Restangular.one('sms-register').customPOST(param);
        },
        smsResetPassword:function(param){
            return Restangular.one('sms-reset-password').customPUT(param)
        }
    }
}]);