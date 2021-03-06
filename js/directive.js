/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module("app.directive", ['app.service']);

//  body元素上的指令   控制menu菜单的指令
var count = 0;
app.directive("appDirective", function($state){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            var $body = $(ele);         // body
            var $menu = $body.find("#menu-content");        // menu-content
            var $choosetype = $("#choose-type");            // choose-type
            scope.showMenu = {
                header : false,
                main : false,
                footer : false
            };
            function show(){
                scope.showMenu.header = true;
                scope.showMenu.main = true;
                scope.showMenu.footer = true;
            }
            function hide(){
                scope.showMenu.header = false;
                scope.showMenu.main = false;
                scope.showMenu.footer = false;
            }
            scope.show = function(){
                show();
                if(!$menu.hasClass('actionIn') && !$menu.hasClass('actionOut')){
                    $menu.toggleClass('actionIn')
                } else {
                    $menu.toggleClass('actionIn').toggleClass('actionOut')
                }
                $body.css("overflow-x", "hidden");$menu.css('box-shadow', '5px 0px 20px #000');
            };
            scope.hide = function(){
                hide();
                $menu.toggleClass('actionIn').toggleClass('actionOut')
                $body.css("overflow-x", "auto");$menu.css('box-shadow', 'none');
            };

            // 回车按钮的回车事件的添加
            var $searchInput = $(".search-input-text");
            scope.keypressHander = function(e) {
                var char = event.which || event.keyCode;
                if(char == 13) {
                    scope.hide();
                    $(".choose-wrap").remove();
                    $state.go('search', {keyword: $searchInput.val()});
                    $searchInput.val("").blur();
                }
            };

            scope.searchHandler = function(){
                scope.hide();
                $(".choose-wrap").remove();
                $state.go('search', {keyword: $searchInput.val()});
                $searchInput.val("").blur();
            };

            // 搜索键点击搜索
            //$menu.on('click', ".search-btn", function(){
            //
            //});
            //  菜单点击之后的控制
            $menu.on('click', ".menu-list-item", function(){
                scope.hide();
                var $a = $(this).find("a");
                var color = $a.attr("data-color");
                var value = $a.attr("data-value");
                $choosetype.css('background-color', color).html(value);
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
                    if(data.body.list[i].title=='menus'){
                        for(var j = 0;j<data.body.list[i].children.length;j++){
                            if(data.body.list[i].children[j].title=='首页'){
                               data.body.list[i].children.splice(j,1);
                            }
                        }
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
            //区分邮箱手机号注册
            scope.$watch('emailOrPhone',function(newVal,oldVal,scope){
                if(newVal&&newVal.indexOf('@')!=-1){
                    //console.log(1);
                    $('.getcodes').fadeOut();
                }else{
                    $('.getcodes').fadeIn();
                }
            });
            //第三方登录
            scope.loginUseWX = function(){
                //var obj = new WxLogin({
                //    id:"login_container",
                //    appid: "wx97aeb0c6bb109a5c",
                //    scope: "snsapi_login",
                //    redirect_uri: "http://www.neonan.com"
                //});
                //window.location.href = 'https://passport.yhd.com/wechat/callback.do?code=CODE';
                window.location.href = "https://open.weixin.qq.com/connect/qrconnect?appid=wx97aeb0c6bb109a5c&redirect_uri=http://phptest.neonan.com/frontend&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect";

            };
            scope.loginUseWB = function(){
                window.location.href = 'http://phptest.neonan.com/auth/weibo';
            };
            scope.loginUseQQ = function(){
                window.location.href = 'http://phptest.neonan.com/auth/qq_connect'
                //window.location.href = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100297082&redirect_uri=http://phptest.neonan.com/frontend&callback=cb&scope=all";
            };
            scope.update = function(){
                var param = {
                    _method:'PUT'
                };
                MessagesService.token().then(function(data){
                  param._token = data.body;
                    param.screen_name = scope.changeName;
                    param.email = scope.changeEmail;
                    param.bio = scope.changeBio;
                    param.phone = scope.changePhone;
                    MessagesService.update(param).then(function(data){
                        $('.changeInfoPanel').modal('hide');
                    },function(){
                        alert('修改资料失败')
                    })
                });
                //alert(scope.changeName);
            };
            //找回密码验证码
            $findGetCode.on('click',function(){
                var phone = $('.findmobile').val();
                if(!phone){
                    alert('请输入电话号码');
                    return;
                }
                var param = {
                    target:phone
                }
                MessagesService.smsPasswordCaptcha(param).then(function(data){
                    //console.log('发送成功'+JSON.stringify(data))
                })
            });
            //找回密码部分
            $findsure.on('click',function(){
                var param = {};
                param._method = 'PUT';
                param.target = $('.findmobile').val();;
                param.captcha = $('.findcode').val();
                param.password = $('.findpwd').val();
                param.confirm_password = $('.refindpwd').val();
                MessagesService.token().then(function(data){
                    param._token = data.body;
                    MessagesService.smsResetPassword(param).then(function(data){
                        $('.findpassword').modal('hide');
                        $('.loginDailog').modal('show');
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
                //邮箱注册
                $(this).html("注册中...");
                if(scope.emailOrPhone.indexOf('@')!=-1){
                    var param = {
                        email:scope.emailOrPhone,
                        password:scope.password
                    };
                    MessagesService.token().then(function(data){
                        param._token = data.body;
                        MessagesService.register(param).then(function(data){
                            $(this).html("立即注册");
                            alert(data);
                        })
                    })
                }else{
                    var this_ = $(this);
                    if(!($(ele).find('.regmobile').val()&&$(ele).find('#enter-code').val()&&$(ele).find('.regpwd').val())){
                        $('.worn').fadeIn();
                        return;
                    }
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
                            $('#info-wrap').css('opacity',0);
                            $('.login').fadeOut();
                            $('.reg').fadeOut();
                            $('#info-wrap').fadeIn();
                            scope.user = data.body;
                            //console.log(JSON.stringify(scope.user))
                            setTimeout(function(){
                                $('#info-wrap').css('opacity',1);
                            },1000)
                        },function(err){
                            this_.html("立即注册");
                        });
                    });
                }
                //手机号注册

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
                    phone:$('.smslogin').val(),
                    password:$('.smspwd').val()
                };
                if(m.indexOf('@')!=-1){
                    delete param.sms;
                    delete param.screen_name;
                    param.email = $('.smslogin').val();
                }
                MessagesService.token().then(function(data){
                    param._token = data.body;
                    console.log("登录数据"+JSON.stringify(param));
                    MessagesService.login(param).then(function(logindata){
                        $('.loginDailog').modal('hide');
                        console.log(JSON.stringify(logindata));
                        if(logindata.code=='000000'){
                            $('#info-wrap').css('opacity',0);
                            $('.login').fadeOut();
                            $('.reg').fadeOut();
                            $('#info-wrap').fadeIn();
                            scope.user = logindata.body;
                            console.log(JSON.stringify(scope.user))
                            setTimeout(function(){
                                $('#info-wrap').css('opacity',1);
                            },1000)
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
        replace : true,
        templateUrl:'./template/appFooter.html',
        link:function(scope,ele,attr){
            var weixin = $('.footerweixin');
            weixin.on('click',function(){
                $('#Weixin').modal('show')
            })
        }
    }
});

//底部
app.directive('selfinfoDirective',function(){
    return {
        restrict:"EA",
        link:function(scope,ele,attr){
            var $img = $("#head-img");
            var $input = $("#upload-img");
            $img.on("click", function(){        // 模拟input file类型点中
                $input.trigger("click");
            });
            // 得到上传的文件
            var $image = null;
            $input.on("change", function(){
                window.URL = window.URL || window.webkitURL;
                $image = $('.img-container > img');
                var file = window.URL.createObjectURL(document.getElementById('upload-img').files[0]);
                $image.attr("src", file);
                $("#crop-box").modal("show");
            });

            // 模态框进行显示的时候的事件触发函数
            var ocrop = null;
            var $cropbox = $('#crop-box');
            $cropbox.on('show.bs.modal', function (e) {
                if(ocrop){
                    $image.cropper('reset').cropper('replace', $image.attr("src"));
                } else {
                    var minw = $(window).width() > 768 ? 380 : $(window).width() > 600 ? 280 : 200;
                    var minh = $(window).height() > 780 ? 450 : $(window).height() > 600 ? 380 : $(window).height() > 500 ? 300 : 250;
                    ocrop = $image.cropper({
                        aspectRatio: 1 / 1,
                        guides: false,
                        dragCrop: false,
                        cropBoxMovable: false,
                        cropBoxResizable: false,
                        minContainerWidth: minw,
                        minContainerHeight: minh
                    });
                }
            });

            // 模态框进行隐藏的时候的事件触发函数
            $cropbox.on('hidden.bs.modal', function (e) {
                $input.val("");         // 清空input中的值
            });

            // 点击按钮的控制剪切，
            $("#submit-crop").on("click", function() {
                var src = $image.eq(0).attr("src");
                var canvasdata = $image.cropper("getCanvasData");
                var cropBoxData = $image.cropper('getCropBoxData');
                convertToData(src, canvasdata, cropBoxData, function(basechar) {
                    $img.attr("src", basechar);         // 在此处获取到base64字符串





                });
            });

            //  base64转换函数;
            function convertToData(url, canvasdata, cropdata, callback) {
                var cropw = cropdata.width; // 剪切的宽
                var croph = cropdata.height; // 剪切的宽
                var imgw = canvasdata.width; // 图片缩放或则放大后的高
                var imgh = canvasdata.height; // 图片缩放或则放大后的高
                var poleft = canvasdata.left - cropdata.left; // canvas定位图片的左边位置
                var potop = canvasdata.top - cropdata.top; // canvas定位图片的上边位置
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext('2d');
                canvas.width = cropw;
                canvas.height = croph;
                var img = new Image();
                img.src = url;
                img.onload = function() {
                    this.width = imgw;
                    this.height = imgh;
                    ctx.drawImage(this, poleft, potop, this.width, this.height);
                    var base64 = canvas.toDataURL('image/jpg', 1);
                    callback && callback(base64)
                }
            }
        }
    }
});

//  about 底部链接指令
app.directive('aboutNav',function(){
    return {
        restrict:"EA",
        link:function(scope,ele,attr){
            $("#tab-nav").on("click", "a", function(){
                var $this = $(this);
                $("#tab-nav").find('li').removeClass("active");
                $this.parents("li").addClass("active");
            })
        }
    }
});



//var fd = new FormData(document.getElementById("upload-img"));
//fd.append("CustomField", "This is some extra data");
//$.ajax({
//    url: "",
//    type: "POST",
//    data: fd,
//    processData: false,
//    contentType: false
//});







