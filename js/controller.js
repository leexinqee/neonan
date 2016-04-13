/**
 * Created by lenovo on 2016/4/2.
 */

var app = angular.module('app.controller', ['app.service','ui.router']);

// 总控制器
app.controller("globalCtrl",function($scope,MessagesService){
    //得到banner相关数据
    MessagesService.links().then(function(data){
        $scope.link = data.body[0].friendly_links;

    });
    //侧边栏
    MessagesService.category().then(function(data){
        $scope.category = data.body.list;
    });
    //专辑

    console.log('globalCtrl')
});

// 总体分块的控制器
app.controller("mainCtrl",function(){

});

// 首页顶部部分的控制器
app.controller("topCtrl", function($scope,MessagesService, $state, $location){
    console.log('topCtrl');

    MessagesService.banner().then(function(data){
        $scope.banner = data.body;
    });
    MessagesService.small().then(function (data) {
        $scope.small = data.body;
        $scope.getDetail = function(id){
            $state.go('index.contentDetail', {id : id});
            //$location.path('index/contentdetail');
        };
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
app.controller("topContentCtrl", function($scope, MessagesService, $stateParams){
    var id = $stateParams.id;       // 获取到文章id

    // 获取广告接口
    MessagesService.articleAds().then(function(data){
        console.log(JSON.stringify(data))
    })

    // 获取详情文章接口数据
    MessagesService.articleDetail(id)
        .then(function(data){
            $scope.message = data.body;
            console.log(JSON.stringify(data))
        });

});


// 内容模块上方的广告栏
app.controller("contentTopViewCtrl", function($scope, MessagesService){

    console.log('contentTopViewCtrl')
});

// 内容模块右方的广告栏
app.controller("contentRightViewCtrl", function($scope, MessagesService){
    $scope.video = [];
    MessagesService.video().then(function(data){            // 获取牛男TV接口数据
        $scope.video = data.body.list;
    });

    console.log('contentRightViewCtrl')
});


// 视频TV 控制器
app.controller("tvPageCtrl", function($scope){
    console.log('tvPageCtrl')
});



