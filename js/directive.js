/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module("app.directive", ['app.service']);

//  body元素上的指令   控制menu菜单的指令
var count = 0;
app.directive("appDirective", function(){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            var $body = $(ele);         // body
            var $menu = $body.find("#menu-content");        // menu-content
            var $choosetype = $("#choose-type");            // choose-type

            //  header 头部菜单按钮控制
            $body.find("#menu").on("click", function(){
                $menu.removeClass('actionIn').removeClass('actionOut');
                if(count % 2){
                    $menu.addClass('actionOut');
                } else {
                    $menu.addClass('actionIn');
                }
                count++;
            });

            //  菜单点击之后的控制
            $menu.find(".menu-list").on('click', ".menu-list-item", function(){
                $menu.removeClass('actionIn').removeClass('actionOut');
                var $a = $(this).find("a");
                var color = $a.attr("data-color");
                var value = $a.attr("data-value");
                $choosetype.css('background-color', color).html(value);
                $menu.addClass('actionOut');
                count++;
            })
        }
    }
});

//  轮播控制器插件执行
app.directive('swiper', function(MessagesService){
    return {
        restrict : 'EA',
        templateUrl:'./template/swiper.html',
        replace:true,
        link : function(scope, ele, attr){
            MessagesService.handlPick().then(function (data) {
                scope.handPick = data.body;
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    //autoplay:4000,
                    //loop : true
                });
                //$('.carousel').carousel()
            });
        }
    }
});

//  菜单滚动执行
app.directive('menuContainer', function(MessagesService){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            MessagesService.album().then(function(data){
                scope.album = data.body;
            });
            MessagesService.category().then(function(data){
                scope.category = data.body.list;

            });
            //menu  scroll bar
            $(ele).niceScroll({
                cursorcolor: "rgba(0,0,0,0)", // 光标颜色
                cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: "5px", //像素光标的宽度
                cursorborder: "0", //   游标边框css定义
                cursorborderradius: "5px", //以像素为光标边界半径
                autohidemode: false //是否隐藏滚动条
            });
        }
    }
});


//  登陆框
app.directive('loginupDirective', function(MessagesService,$timeout){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            var $account = $(ele).find("#account");
            var $loginBtn = $(ele).find('#reg');
            $account.on("click", ".close-dialog", function(){
               $(this).parents(".modal").modal('hide');         // 隐藏弹出框
            });
            $loginBtn.on('click',function(){
                var this_ = $(this);
                $(this).html("注册中...");
                regdata = {
                    email:$(ele).find('.regmobile').val(),
                    password:$(ele).find('.regpwd').val()
                };
                alert(JSON.stringify(regdata));
                MessagesService.register(regdata).then(function(data){
                    this_.parents(".modal").modal('hide');
                    this_.html("立即注册");
                },function(err){
                    this_.html("立即注册");
                });
            })
        }
    }
});



//文章部分
app.directive('articles',function(){
    return {
        restrict:"EA",
        link: function (scope, ele, attr) {
            var changBtn = $(ele).find('.change-btn');
            changBtn.on('click',function(){
                $(this).addClass('active').siblings('').removeClass('active');
            })
        }
    }
});

//底部
app.directive('appfooter',function(){
    return {
        restrict:"EA",
        replace:true,
        templateUrl:'./template/appFooter.html'

    }
});