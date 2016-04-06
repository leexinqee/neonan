/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module('app.service',['ngResource']);
app.factory('serviceRouter',['$resource',function($resource){
    var BASEURL = "";
    return function(url,param,method){
        url+=BASEURL;
        return $resource(url,param,method);
    }
}]);
app.factory('getData',[serviceRouter,function(serviceRouter){
    return {
        login:function(){
            var defer = $q.defer();
            serviceRouter.get({id:cardID},function(data,headers){
                defer.resolve(data);
            },function(data,headers){
                defer.reject(data);
            });
            return defer.promise
        },
        regist:function(){},
        findPwd:function(){},
        getArticle:function(){},
        getArticleDetail:function(){},
        getMyCollectionArticle:function(){},
        getAlbum:function(){},
        getCategory:function(){}
    }
}]);
