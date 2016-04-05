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
        login:function(){},
        regist:function(){},
        getArticle:function(){},
        
    }
}]);
app.factory('getDetaildata',['getData','$q'],function(getData,$q){

});
