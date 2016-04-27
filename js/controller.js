/**
 * Created by lenovo on 2016/4/2.
 */

var app = angular.module('app.controller', ['app.service','ui.router', 'ngSanitize']);

// 总控制器
app.controller("globalCtrl",function($scope, MessagesService, $state,$location){
    //得到banner相关数据
    MessagesService.links().then(function(data){
        $scope.link = data.body[0].friendly_links;
    });
    $scope.bannerBorColor = ['border-b-77c322','border-b-ed236c','border-b-3b3863'];
    $scope.clearTips = function(){
        $('#choose-type').css('background-color', 'RGBA(0,0,0,0)').html('');
        $('#menu-content').removeClass('actionIn').removeClass('actionOut');
        $('body').scrollTop(0);
    };

    //检测登录状态
    MessagesService.isCheck().then(function(data){
        if(data.body){
            $('.info-wrap').css('opacity',0);
            $('.login').fadeOut();
            $('.reg').fadeOut();
            $('.info-wrap').fadeIn();
            if(data.body.avatar.indexOf('default')!=-1){
                var headPic = window.location.host+data.body.avatar;
                $('.head-img').attr('src',"http://"+headPic);
            }else{
                $('.head-img').attr('src',data.body.avatar);
            }
            $('.userCenter').attr('data-id',data.body.id);
            $('.userCenter').attr('ng-href','#/index/selfinfo?uid='+data.body.id);
            $('.userCenter').attr('href','#/index/selfinfo?uid='+data.body.id)
            setTimeout(function(){
                $('.info-wrap').css('opacity',1);
            },1000)
        }else{
            return false;
        }
    });
    $scope.logout = function(){
        MessagesService.loginOut().then(function(data){
            $('.info-wrap').css('opacity',0);
            $('.info-wrap').fadeOut();
            $('.login').fadeIn();
            $('.reg').fadeIn();
            $state.go('index');
            setTimeout(function(){
                $('.info-wrap').css('opacity',1);
            },1000)
        },function(err){
            alert('退出异常');
            return false;
        })
    }
    //获取微信js sdk配置文件
    MessagesService.weixinConfig().then(function(data){
        var w = document.createElement('script');
        w.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js';
        document.body.appendChild(w);
        w.onload = function(){
            //alert(1)
            var wx
        }
    })
});

// 总体分块的控制器
app.controller("mainCtrl",function($scope){
});

// 首页顶部部分的控制器
app.controller("topCtrl", function($scope,MessagesService, $state, $location){
    MessagesService.banner().then(function(data){
        $scope.bannerBorColor = ['border-b-77c322','border-b-ed236c','border-b-3b3863'];
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
    $scope.tabPic = './images/latest.png';
    $scope.className = true;
    $scope.clickToggleHandler = function(args){
        $scope.articleParam.hot = args;
        $scope.articleParam.per_page = '5';
        if(args == "0"){
            $scope.className = true;
            $scope.tabPic = "./images/latest.png"
        } else if(args == "1"){
            $scope.className = false;
            $scope.tabPic = "./images/Hottest.png"
        }
        MessagesService.getArticle($scope.articleParam).then(function(data){
            $scope.article = data.body.list;
        });
    };
    $scope.clickToggleHandler('0');
});

// 右边导航控制器
app.controller("asideRightCtrl",function($scope,MessagesService, $sce){
    $scope.videoParam = {
        per_page:'4',
        from:4
    };
    $scope.smallBar = [];       // 主页小广告栏信息
    MessagesService.video($scope.videoParam).then(function(data){
        $scope.video = data.body.list;
    });
    // 广告信息获取
    MessagesService.articleAds().then(function(data){
        var bars = data.body;
        for(var i = 0; i < bars.length; i++){
            if(bars[i].width && bars[i].width <= 300){
                bars[i].code = $sce.trustAsHtml(bars[i].code);
                $scope.smallBar.push(bars[i]);
            }
        }
    });
});

// 个人信息的上方信息显示模块儿
app.controller("topInfoCtrl", function($scope, $stateParams,MessagesService){
    $("body").scrollTop(0);    // 页面详情滚动到顶端
    var uid = $stateParams.uid;
    MessagesService.users().then(function(data){
        if(data.body.avatar.indexOf('default')!=-1){
            $scope.userHeadPic = "http://"+window.location.host + data.body.avatar;
        }else{
            $scope.userHeadPic = data.body.avatar;
        }
        $scope.userName = data.body.screen_name||data.body.email||"匿名";
        $scope.userPhone = data.body.phone||"用户未使用手机注册";
    });
    $scope.changePanel = function(){
        $('.changeInfoPanel').modal('show');
    };
    console.log('topInfoCtrl')
});

// 个人信息的下方左边模块儿收集控制器
app.controller("selfCollectCtrl", function($scope,MessagesService){
    //console.log('selfCollectCtrl')
    MessagesService.favarites().then(function(data){
        //console.log(JSON.stringify(data))
        $scope.article = data.body.list.articles;
    })
});

// 个人信息的下方右边模块儿喜欢控制器
app.controller("selfLikeCtrl", function($scope,MessagesService){
    //console.log('selfLikeCtrl')
    MessagesService.favarites().then(function(data){
        //console.log(JSON.stringify(data))
        $scope.video = data.body.list.video;
    })
});


// 分类信息的上方信息显示
app.controller("topCategoryCtrl", function($scope, MessagesService, $stateParams){
    $("body").scrollTop(0);    // 页面详情滚动到顶端
    $scope.slug = $stateParams.slug;
    $scope.coverImg = decodeURIComponent($stateParams.cover);
    //MessagesService.banner().then(function(data){
    //    $scope.bannerBorColor = ['border-b-77c322','border-b-ed236c','border-b-3b3863'];
    //    $scope.banner = data.body;
    //});
    //MessagesService.small().then(function (data) {
    //    $scope.small = data.body;
    //});
});


// 整个内容模块的控制器
app.controller("topContentCtrl", function($scope, MessagesService, $stateParams, $sce, toolService,$location){
    var id = $stateParams.id;       // 获取到文章id

    $("body").scrollTop(0);    // 页面详情滚动到顶端

    $scope.comment = "";        // 评论信息
    $scope.submitComment = function(){
        if($.trim($scope.comment)){
            //alert($scope.comment);
            //$scope.comment = "";
            var reqData = {
                _method : "PUT",
                article_id : id,
                comment : $scope.comment
            };
            MessagesService.token().then(function(data){
                reqData._token = data.body;
                MessagesService.articleComment(reqData).then(function(data){
                    alert(JSON.stringify(data))
                })
            })
        } else {
            alert("输入无效")
        }
    };

    // 获取详情文章接口数据
    MessagesService.articleDetail(id)
        .then(function(data){
            console.log(JSON.stringify(data));
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
                    //console.log(JSON.stringify(param))
                    MessagesService.articleLike(param).then(function(data){
                        alert('收藏成功')
                    },function(err){
                        if(err.code = "100000"){
                            alert('你已经收藏过了');
                        }else{
                            $('.loginDailog').modal('show');
                        }

                        //alert(err.statusText)
                    });
                })
            };
            // 文章数据渲染
            $scope.message = data.body;
            $scope.message.currentUrl = encodeURIComponent($location.$$absUrl);
            $scope.message.sharePic = data.body.cover_image;
            // 文章内容
            //console.log(JSON.stringify($scope.message))
            $scope.htmlText = function(){
                return $sce.trustAsHtml(data.body.details);
            };

            // 文章分页
            var prev = $scope.message.prev_url,
                next = $scope.message.next_url;
            
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
});

// 内容模块右方的广告栏
app.controller("contentRightViewCtrl", function($scope, MessagesService, $sce){
    $("body").scrollTop(0);    // 页面详情滚动到顶端
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
});


// 视频TV 控制器
app.controller("tvPageCtrl", function($scope, MessagesService){
    $("body").scrollTop(0);    // 页面详情滚动到顶端
    var index = 1;      // 判断是否是第一次获取数据。
    // 发送请求的传递参数
    var param = {
        page : 0,
        per_page : 14,
        start_offset : 0,
        from : 8
    };
    $scope.videos = [];

    $scope.loadingMore = function(){
        param.page += 1;
        //console.log(JSON.stringify(param));
        MessagesService.video(param).then(function(data){            // 获取牛男TV接口数据
            if(index == 1){
                $scope.video = data.body.list.slice(0,5);
                $scope.videos = data.body.list.slice(5);
            } else {
                var item = data.body.list;
                for(var i = 0; i < item.length; i++){
                    $scope.videos.push(item[i]);
                }
                //console.log(JSON.stringify(data));
            }
            index++;
            param.per_page = 9;
        });
    };
    $scope.loadingMore();
    //MessagesService.videoDetail(14431).then(function(data){
    //    console.log(JSON.stringify(data))
    //});
});

// 视频TV详情控制器
app.controller("tvDetailCtrl", function($scope, MessagesService, $stateParams, $sce,$location){
    $("body").scrollTop(0);    // 页面详情滚动到顶端
    var id = $stateParams.id;
    MessagesService.videoDetail(id).then(function(data){
        // 内容信息渲染
        $scope.message = data.body;
        $scope.message.currentUrl = encodeURIComponent($location.$$absUrl);
        $scope.message.sharePic = data.body.image_filename;
        console.log(JSON.stringify(data));
        $scope.like = function(id){
            MessagesService.token().then(function(data){
                var param = {};
                param._token = data.body;
                param.video_id = id;
                param._method = 'put';
                //console.log(JSON.stringify(param))
                MessagesService.videoLike(param).then(function(data){
                    alert('收藏成功')
                },function(err){
                    if(err.code=="100000"){
                        alert('你已经收藏过了')
                    }else{
                        $('.loginDailog').modal('show');
                    }
                });
            })
        };
        // 视频信息渲染
        var larr = data.body.url.split('.');
        var pre = larr[larr.length-1];
        var html = '';
        if(pre == 'swf'){
            html = '<EMBED src="' + data.body.url + '" width="100%" play="true" loop="false" menu="true" quality="high" type="application/x-shockwave-flash" name="myFlash" swLiveConnect="true" allowfullscreen="true"></EMBED>';
        } else if(pre == 'mp4' || pre == 'MP4'){
            html = '<video width="100%" controls><source src="'+ data.body.url +'"  type="video/mp4"></video>';
        } else {
            html = '<iframe class="video_area" src="'+ data.body.url +'" frameborder="0" width="100%" height="400"></iframe>'

        }
        $("#movie").html(html);

        // 文章内容
        $scope.htmlTemplate = function(){
            return $sce.trustAsHtml($scope.message.details);
        };


        var token = "";
        MessagesService.token().then(function(data){
            console.log("token:  "+JSON.stringify(data));
            token = data.body;
        });


        // 评论信息
        $scope.comment = "";
        $scope.submitComment = function(){
            if($.trim($scope.comment)){
                var reqData = {
                    _method : "PUT",
                    video_id : id,
                    comment : $scope.comment
                };
                MessagesService.token().then(function(data){
                    reqData._token = data.body;
                    MessagesService.videoComment(reqData).then(function(data){
                        alert(JSON.stringify(data))
                    })
                });
            } else {
                alert("输入无效")
            }
        };
    });
});

// 搜索控制器
app.controller("searchCtrl", function($scope, $state){
    $scope.content = "";
    $scope.searchHandler = function(){
        $state.go('search', {keyword: $scope.content});
        $scope.content = "";
    };
});

// 搜索页面控制器
app.controller("searchDetailCtrl", function($scope, MessagesService, $stateParams){
    $scope.keyword = $stateParams.keyword;
    MessagesService.search({q: $stateParams.keyword}).then(function(data){
        //console.log(JSON.stringify(data));
        $scope.lists = data.body.list;
    })
});



// tag标签页面控制器
app.controller("tagDetailCtrl", function($scope, MessagesService, $stateParams){
    $scope.tagid = $stateParams.id;
    $scope.keyword = $stateParams.tag;
    MessagesService.getTags($scope.tagid).then(function(data){
        console.log(JSON.stringify(data));
        $scope.lists = data.body;
    })
});
