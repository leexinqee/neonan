/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module('app.controller', ['app.service']);

// 总控制器
app.controller("globalCtrl",function($scope,MessagesService){
    //得到banner相关数据
    MessagesService.links().then(function(data){
        console.log(JSON.stringify(data))
        $scope.link = data.body[0].friendly_links;

    });
    console.log('globalCtrl')
});

// 总体分块的控制器
app.controller("mainCtrl",function(){

});

// 首页顶部部分的控制器
app.controller("topCtrl", function($scope,MessagesService){
    console.log('topCtrl');
    MessagesService.handlPick().then(function (data) {
        $scope.handPick = data.body;
        console.log('asa'+JSON.stringify(data))
    });
    MessagesService.banner().then(function(data){
        $scope.banner = data.body;
        console.log(JSON.stringify(data));
    });
    MessagesService.small().then(function (data) {
        $scope.small = data.body;
    })
});

//  左侧导航栏控制器
app.controller("asideLeftCtrl", function($scope,MessagesService){
    MessagesService.getArticle().then(function(data){
        $scope.article = data.body.list;
    });
    console.log('asideLeftCtrl')
});

// 右边导航控制器
app.controller("asideRightCtrl",function($scope,MessagesService){
    MessagesService.video().then(function(data){
        $scope.video = data.body.list;
    });
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
app.$inject = ['app.service'];

