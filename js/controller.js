/**
 * Created by lenovo on 2016/4/2.
 */

var app = angular.module('app.controller', ['app.service','ui.router', 'ngSanitize']);

// 总控制器
app.controller("globalCtrl",function($scope,MessagesService){
    //得到banner相关数据
    MessagesService.links().then(function(data){
        $scope.link = data.body[0].friendly_links;
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
app.controller("asideLeftCtrl", function($scope, MessagesService, $stateParams){
    var slug = $stateParams.slug;
    $scope.articleParam = {
        hot:'0',
        page:'0',
        per_page:'5',
        from:'10'
    };
    if(slug){
        $scope.articleParam.slug = slug;
    }
    $scope.className = true;
    $scope.clickToggleHandler = function(args){
        $scope.articleParam.hot = args;
        if(args == "0"){
            $scope.className = true;
        } else if(args == "1"){
            $scope.className = false;
        }
        MessagesService.getArticle($scope.articleParam).then(function(data){
            $scope.article = data.body.list;
        });
    };
    MessagesService.getArticle($scope.articleParam).then(function(data){
        $scope.article = data.body.list;
    });
    console.log('asideLeftCtrl')
});

// 右边导航控制器
app.controller("asideRightCtrl",function($scope,MessagesService){
    $scope.videoParam = {
        per_page:'4'
    };
    MessagesService.video($scope.videoParam).then(function(data){
        $scope.video = data.body.list;
    });
    console.log('asideRightCtrl');
});

// 个人信息的上方信息显示模块儿
app.controller("topInfoCtrl", function($scope){
    console.log('topInfoCtrl')
});


// 分类信息的上方信息显示
app.controller("topCategoryCtrl", function($scope, MessagesService, $stateParams){
    $scope.slug = $stateParams.slug;
    MessagesService.banner().then(function(data){
        $scope.banner = data.body;
    });
    MessagesService.small().then(function (data) {
        $scope.small = data.body;
    });
    console.log('topCategoryCtrl')
});


// 整个内容模块的控制器
app.controller("topContentCtrl", function($scope, MessagesService, $stateParams, $sce, toolService){
    var id = $stateParams.id;       // 获取到文章id
    // 获取广告接口
    //MessagesService.articleAds().then(function(data){
    //    console.log(JSON.stringify(data))
    //});

    // 获取详情文章接口数据
    MessagesService.articleDetail(id)
        .then(function(data){
            // 是否显示分页按钮
            $scope.pagesShow = {
                prev : true,
                next : true,
                all : true
            };
            $scope.like = function(id){
                MessagesService.token().then(function(data){
                    var param = {};
                    param._token = data.body;
                    param.article_id = id;
                    param._method = 'put';
                    console.log(JSON.stringify(param))
                    MessagesService.articleLike(param).then(function(data){
                        alert(JSON.stringify(data))
                    },function(err){
                        alert(err.statusText)
                    });
                })
            };
            // 文章数据渲染
            $scope.message = data.body;
            // 文章内容
            $scope.htmlText = function(){
                return $sce.trustAsHtml(data.body.details);
            };

            var prev = $scope.message.prev_url,
                next = $scope.message.next_url;

            // 文章分页
            if(prev && prev == "没有了"){
                $scope.pagesShow.prev = false;
            } else {
                $scope.prevArtId = toolService.parserArticleId($scope.message.prev_url);
            }
            if(next && next == "没有了"){
                $scope.pagesShow.next = false;
            } else {
                $scope.nextArtId = toolService.parserArticleId($scope.message.next_url);
            }
            if(!$scope.pagesShow.prev && !$scope.pagesShow.next){
                $scope.pagesShow.all = false;
            }
        });

});


// 内容模块上方的广告栏
app.controller("contentTopViewCtrl", function($scope, MessagesService, $sce){
    //MessagesService.ads().then(function(data){
    //    console.log(JSON.stringify(data))
    //});
    $scope.bigBar = [];
    MessagesService.articleAds().then(function(data){
        var bars = data.body;
        for(var i = 0; i < bars.length; i++){
            if(bars[i].width && bars[i].width >= 700){
                bars[i].code = $sce.trustAsHtml(bars[i].code);
                $scope.bigBar.push(bars[i]);
            }
        }
    });
    console.log('contentTopViewCtrl')
});

// 内容模块右方的广告栏
app.controller("contentRightViewCtrl", function($scope, MessagesService, $sce){
    $scope.video = [];
    $scope.smallBar = [];
    MessagesService.video().then(function(data){            // 获取牛男TV接口数据
        $scope.video = data.body.list;
    });
    MessagesService.articleAds().then(function(data){
        var bars = data.body;
        for(var i = 0; i < bars.length; i++){
            if(bars[i].width && bars[i].width <= 300){
                bars[i].code = $sce.trustAsHtml(bars[i].code);
                $scope.smallBar.push(bars[i]);
            }
        }
    });
    console.log('contentRightViewCtrl')
});


// 视频TV 控制器
app.controller("tvPageCtrl", function($scope, MessagesService){

    MessagesService.video().then(function(data){            // 获取牛男TV接口数据
        //console.log(JSON.stringify(data))
        $scope.video = data.body.list;
    });
    //MessagesService.videoDetail(14431).then(function(data){
    //    console.log(JSON.stringify(data))
    //});
    console.log('tvPageCtrl')
});

// 视频TV详情控制器
app.controller("tvDetailCtrl", function($scope, MessagesService, $stateParams){
    var id = $stateParams.id;
    MessagesService.videoDetail(id).then(function(data){
        var html = '<EMBED src="' + data.body.url + '" width="100%" height="400" play="true" loop="false" menu="true" quality="high" type="application/x-shockwave-flash" name="myFlash" swLiveConnect="true" allowfullscreen="true"></EMBED>';
        $("#movie").html(html);
    });
    console.log('tvDetailCtrl')
});

