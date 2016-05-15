(function() {
    var BASEURL = 'http://phptest.neonan.com/';
    var menuIcon = document.querySelector('.menu'),
        menuContent = document.querySelector('.menu-content'),
        menuLists = $('.menu-list-item'),
        menuListLen = menuLists.length;
    menuContent.style.height = window.innerHeight + "px";
    // 检查当签用户登录状态
    $.ajax({
        url:BASEURL+'is-check',
        type:'GET',
        dataType:'JSON'
    }).done(function (data) {
        if(data.body){
            var host = window.location.host;
            var head = host+data.body.avatar;
            $('#headpic').attr('src',"http://"+head);
            $('.login-rigester').css('display','none');
            $('.user-head-pic').css('display','block');
        }
    }).fail(function (err) {

    })
    // 点击关闭遮罩效果
    $('body').on('click', '.tp-mask', function() {
            $('.main-wrap').toggleClass('open');
        })
        // 第三方登录
    $('.other-login-list').on('click', '.qq', function() {
        window.location.href = BASEURL + 'auth/qq_connect'
    })
    $('.other-login-list').on('click', '.weibo', function() {
        window.location.href = BASEURL + 'auth/weibo'
    })
    $('.other-login-list').on('click', '.weixin', function() {
            window.location.href = BASEURL + 'auth/qq_connect'
        })
    $('.smslogin,.smspwd').on('focus',function(){
        $('.somewrong').css('display','none')
    })
        // 登录按钮
    $('.dialog-submit-wrap').on('click', '.loginnow', function() {
            var account = $('.smslogin').val();
            var pass = $('.smspwd').val();
            if (!account) {
                alert('用户名不能为空！');
                return;
            }
            if (!pass) {
                alert('密码不能为空！');
                return;
            }
            var param = {
                sms: '1',
                phone: account,
                password: pass
            };
            $this = $(this);
            $this.html('登录中').attr('disabled', true);
            if (account.indexOf('@') != -1) {
                // 邮箱登录
                delete param.sms;
                delete param.phone;
                param.email = account;

            }
            // 获取TOKEN
            $.ajax({
                url: BASEURL + 'token',
                type: 'GET',
                dataType: 'JSON'
            }).done(function (data) {
                param._token = data.body;
                $.ajax({
                    url: BASEURL + 'login',
                    type: 'POST',
                    dataType: 'JSON',
                    data: param
                })
                    .done(function(data) {
                        // 登录成功显示数据
                        $('.login-rigester').css('display','none');
                        $('.user-head-pic').css('display','block');
                        $('#login').modal('hide');
                    })
                    .fail(function() {
                        // 登录失败 提示
                        $('.somewrong').css('display','block')
                    })
                    .always(function() {
                        $this.html('立即登录').attr('disabled', false);
                    });

            })
            })
            // 动态改变短信验证码输入框显示隐藏
            $('.regmobile').on('keyup',function () {
                var value = $(this).val();
                if(value.indexOf('@')!=-1){
                    $('.getcodes').css('display','none');
                }else{
                    $('.getcodes').css('display','block');
                }
            });
            // 获取注册短信验证码
            $('.get-code').on('click',function () {
               var phonenum = $('.regmobile').val();
                var $this = $(this);
                var timer = null;
                if(!phonenum){
                    alert('请先填入手机号码');
                    return;
                }
                $this.html('正在获取验证码');
                $.ajax({
                    url:BASEURL+'captcha',
                    type:'GET',
                    dataType:'JSON',
                    data:{
                        target:phonenum
                    }
                }).done(function(data){
                    if(data.code=='000000'){
                    //    获取短信验证码成功
                        $this.html('60');
                        timer = setInterval(function(){
                            if(parseInt($this.html())==1){
                                clearInterval(timer);
                                $this.html('获取验证码')
                            }else{
                                var n = parseInt($this.html());
                                $this.html(--n);
                            }
                        },1000)
                    }
                }).fail(function () {
                    alert('获取验证码失败')
                    $this.html('获取验证码')
                }).always(function () {
                    // $this.html('获取验证码')
                })
            });
            // 注册
            $('#reg').on('click',function () {
                var $this = $(this);
                $this.html('注册中');
                var account = $('.regmobile').val();
                var mscode = $('#enter-code').val();
                var pwd = $('.regemail').val();
                var repwd = $('.regpwd').val();
                if(!account){
                    alert('请输入手机号码或邮箱');
                    return;
                }
                if(pwd!=repwd){
                    alert('密码输入不一致');
                    return;
                }
                var param  = {
                    target:account,
                    captcha:mscode,
                    password:pwd,
                    confirm_password:repwd
                };
                if(mscode){
                //    手机号码注册
                    $(this).html('注册中')
                    $.ajax({
                        url:BASEURL+'token',
                        type:'GET',
                        dataType:'JSON'
                    }).done(function (data) {
                        param._token = data.body;
                        $.ajax({
                            url:BASEURL+'sms-register',
                            type:'POST',
                            dataType:'JSON',
                            data:param
                        }).done(function(data){
                        //    注册成功
                        //     头像显示
                            $('.login-rigester').css('display','none');
                            $('.user-head-pic').css('display','block');
                            $('#rigester').modal('hide');
                        })
                    })
                }else{

                }
            });
        // 点击出现导航条文字效果
    function addListToHeader(param, color) {
        var paramarr = param.split(' ');
        if ($('.choose-type').length) {
            if (paramarr.length > 1) {
                $('.choose-type').text(paramarr[1] + " | " + paramarr[0])
            } else {
                $('.choose-type').text(paramarr[0])
            }
        } else {
            if (paramarr.length > 1) {
                var $div = $('<div class="choose-type">' + paramarr[1] + ' | ' + paramarr[0] + '</div>');
            } else {
                var $div = $('<div class="choose-type">' + paramarr[0] + '</div>');
            }
            $('.choose-wrap').append($div)
        }
        $('header').css('border-bottom-color', color)
        $('.choose-type').css({
            "background-color": color
        })
        $('.main-wrap').toggleClass('open');
    }
    //menu  scroll bar 
    $('.menu-content').niceScroll({
        cursorcolor: "rgba(0,0,0,0)", // 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", //   游标边框css定义
        cursorborderradius: "5px", //以像素为光标边界半径
        autohidemode: false //是否隐藏滚动条
    });
    // 侧边栏点击事件绑定
    var ev = new UIElement({
        name: "openMenu",
        htmlRef: menuIcon,
        handler: function() {
            $('.main-wrap').toggleClass('open');
        },
        type: 'click'
    })
    for (var i = 0; i < menuListLen; i++) {
        var a = new UIElement({
            name: 'changeType',
            htmlRef: menuLists[i],
            handler: function(e) {
                var e = window.event || e;
                var target = e.target || e.srcElement;
                var value = target.innerHTML;
                var bgColor = target.getAttribute('data-color');
                addListToHeader(value, bgColor);
                e.preventDefault();
                e.returnValue = false
            },
            type: "click"
        })
    }
    //window size change then change menu
    window.onresize = function() {
        menuContent.style.height = window.innerHeight + "px";
    }
})()
