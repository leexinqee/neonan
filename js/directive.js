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
            $menu.on('click', ".menu-list-item", function(){
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
                $(ele).find("img").on("load", function(){
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        paginationClickable: true,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        autoplay:4000,
                        loop : true
                    });
                });

            });
        }
    }
});

//  菜单滚动执行
app.directive('menuContainer', function(MessagesService){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            scope.styles = ['#b9b9b9', '#d93347', '#7e2dc2',
                '#cb07ad', '#00b451', '#eb9318', '#ee246e',
                '#29658a', '#76c422', '#ff6600', '#9cc422', '#9cc422'];
            MessagesService.album().then(function(data){
                //console.log(JSON.stringify(data))
                scope.album = data.body;
            });
            MessagesService.category().then(function(data){
                for(var i = 0;i<data.body.list.length;i++){
                    if(!data.body.list[i].hasOwnProperty('children')){
                        var temp = {
                            title:data.body.list[i].title,
                            slug:data.body.list[i].slug,
                            id:data.body.list[i].id
                        };
                        data.body.list[i].children = [temp];
                    }
                }
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
            var $getCode = $(ele).find('.get-code');
            var $login = $(ele).find('.loginnow');
            var $returnLogin = $(ele).find('#return');
            var $returnReg = $(ele).find('.no-account-right');
            var $forgetpwd = $(ele).find('.forgetpwd');
            var $userHead = $('.userHead');
            var $findsure = $('.findsure');
            var $findmobile = $('.findmobile').val();
            var $findcode = $('.findcode').val();
            var $findpwd = $('.findpwd').val();
            var $refindpwd = $('.refindpwd').val();
            var $findGetCode = $('.find-get-code');
            var end;
            //点击头像进入个人中心部分
            $userHead.on('click',function(){
                $('.user-info-enter').fadeToggle()
                //setTimeout(function(){
                //    $('.user-info-enter').fadeOut();
                //},2000)
            });
            //找回密码验证码
            $findGetCode.on('click',function(){
                var phone = $('.findmobile').val();
                if(!phone){
                    alert('请输入电话号码');
                    return;
                }
                MessagesService.smsPasswordCaptcha()
            })
            //找回密码部分
            $findsure.on('click',function(){
               if(!($findmobile&&$findcode&&$findpwd&&$refindpwd)){
                   $('.worn').fadeIn();
                   return;
               }
                var param = {};
                param.target = $findmobile;
                param.captcha = $findcode;
                param.password = $findpwd;
                param.confirm_password = $refindpwd;
                MessagesService.token().then(function(data){
                    param._token = data.body;
                    MessagesService.smsResetPassword(param).then(function(data){
                        alert(data)
                    })
                })
            });
            $forgetpwd.on('click',function(){
                $('.loginDailog').modal('hide');
                $('.findpassword').modal('show');
            });
            $returnLogin.on('click',function(){

                $(this).parents(".modal").modal('hide');
                $('.loginDailog').modal('show');
                initDailog();
            });
            $account.on("click", ".close-dialog", function(){
               $(this).parents(".modal").modal('hide');         // 隐藏弹出框
                initDailog();
            });
            function initDailog(){
                $('.regmobile').val('');
                $('#enter-code').val('');
                $('.regemail').val('');
                $('.regpwd').val('');
                $('.get-code').html('获取验证码');
                $('.worn').html('注册参数错误').fadeOut();
                $('.loginnow').html('立即登陆');
                clearInterval(end);
            }
            $loginBtn.on('click',function(){
                var this_ = $(this);
                if(!($(ele).find('.regmobile').val()&&$(ele).find('#enter-code').val()&&$(ele).find('.regpwd').val())){
                    $('.worn').fadeIn();
                    return;
                }
                $(this).html("注册中...");
                regdata = {
                    target:$(ele).find('.regmobile').val(),
                    captcha:$(ele).find('#enter-code').val(),
                    password:$(ele).find('.regemail').val(),
                    confirm_password:$(ele).find('.regpwd').val()
                };
                MessagesService.token().then(function(data){
                    regdata._token = data.body;
                    MessagesService.smsRegister(regdata).then(function(data){
                        this_.parents(".modal").modal('hide');
                        initDailog();
                        this_.html("立即注册");
                        $(ele).find('.regmobile').val('');
                        $(ele).find('#enter-code').val('');
                        $(ele).find('.regpwd').val('');
                        $('.login').fadeOut();
                        $('.reg').fadeOut();
                        $('.userHead').fadeIn();
                        scope.user = data.body;
                        console.log(JSON.stringify(scope.user))
                    },function(err){
                        this_.html("立即注册");
                    });
                });
            });
            $getCode.on('click',function(){
                var $this = $(this);
                $(this).html(60);
                end = setInterval(function(){
                    var time = parseInt($this.html());
                    if(time==1){
                        clearInterval(end);
                    }
                    $this.html(--time);
                },1000);
                $('.worn').html('验证码已发送到你的手机').fadeIn();
                setTimeout(function(){
                    $('.worn').fadeOut();
                    setTimeout(function(){
                        $('.worn').html('注册参数错误');
                    },400)
                },1000);

                var param = {
                    target:$('.regmobile').val()||$('.findmobile').val()
                };
                MessagesService.captcha(param).then(function(data){
                    //alert(JSON.stringify(data));
                },function(err){
                    if(err.status==401){
                        $('.worn').html('您已经注册，请登录').fadeIn();
                    }
                    clearInterval(end);
                    $this.html('获取验证码')
                })
            })
            $login.on('click',function(){
                var $this = $(this);
                var m = $('.smslogin').val();
                var p = $('.smspwd').val();
                if(!(m&&p)){
                    $('.worn').fadeIn();
                    return;
                }
                $this.html('登录中...');
                var param = {
                    sms:'1',
                    screen_name:$('.smslogin').val(),
                    password:$('.smspwd').val()
                };

                MessagesService.token().then(function(data){
                    param._token = data.body;
                    console.log("登录数据"+JSON.stringify(param));
                    MessagesService.login(param).then(function(logindata){
                        $('.loginDailog').modal('hide');
                        console.log(JSON.stringify(logindata));
                        if(logindata.code=='000000'){
                            $('.login').fadeOut();
                            $('.reg').fadeOut();
                            $('.userHead').fadeIn()/*.find('span').html(logindata.body.screen_name)*/
                            scope.user = logindata.body;
                            console.log(JSON.stringify(scope.user))
                        }
                    })
                })
            });
            $returnReg.on('click',function(){
                $('.loginDailog').modal('hide');
                $('.regdailog').modal('show');
            })
        }
    }
});


//文章部分
app.directive('articles',function(MessagesService){
    return {
        restrict:"EA",
        link: function (scope, ele, attr) {
            var more = $(ele).find('.load-more');
            more.on('click',function(){
                $(this).text('LOADING...');
                var $this = $(this);
                // 意思是 每次都是请求的第一页，但是请求的数据不同
                scope.articleParam.per_page = parseInt(scope.articleParam.per_page) + 5;
                //console.log(JSON.stringify(scope.articleParam));
                MessagesService.getArticle(scope.articleParam).then(function(data){
                    scope.article = data.body.list;
                    $this.text('LOADING MORE');
                },function(){
                    $this.text('LOADING MORE');
                })
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