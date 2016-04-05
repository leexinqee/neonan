/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module('app.service',['ngResource']);
app.factory('getData',[$resource,function($resource){
    return function(url,params,methods){
        var BASEURL = "http://v2.api.neonan.com/v4/";
        url+=BASEURL;
        var defaults = {
            get:{
                method:'get',
                isArray:false
            },
            post:{
                method:'post'
            }
        };
        methods = angular.extend(defaults,methods);
        return resourse = $resource(url,params,methods);
    };
}]);