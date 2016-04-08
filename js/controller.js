/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module('app.controller', []);

// 总控制器
app.controller("globalCtrl",function(){
    console.log('globalCtrl')
});

// 总体分块的控制器
app.controller("mainCtrl",function(){

});

// 首页顶部部分的控制器
app.controller("topCtrl", function($scope){
    console.log('topCtrl')
});

//  左侧导航栏控制器
app.controller("asideLeftCtrl", function($scope){
    console.log('asideLeftCtrl')
});

// 右边导航控制器
app.controller("asideRightCtrl",function($scope){
    console.log('asideRightCtrl');
});

// 个人信息的上方信息显示模块儿
app.controller("topInfoCtrl", function($scope){
    console.log('topInfoCtrl')
});


// 整个内容模块的控制器
app.controller("topContentCtrl", function($scope){
    console.log('topContentCtrl')
});


// 内容模块上方的广告栏
app.controller("contentTopViewCtrl", function($scope){
    console.log('contentTopViewCtrl')
});



// 视频TV 控制器
app.controller("tvPageCtrl", function($scope){
    console.log('tvPageCtrl')
});


