/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module('app.service',['ngResource']);
app.factory('getData',["$resource", function($resource){
    return $resource('/recipe/:id',{id:'@id'});
}]);
app.factory('getDetaildata',['getData','$q'],function(getData,$q){
    return function(){
        var defer = $q.defer;
        getData.query(function(recipes){
            defer.resolve(recipes)
        },function(err){
            defer.reject(err)
        });
        return defer.promise
    };
});