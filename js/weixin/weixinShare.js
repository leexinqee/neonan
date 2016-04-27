/**
 * Created by Administrator on 2016/4/27.
 */
wx.ready(function(){
//    验证成功
    wx.onMenuShareTimeline({
        title: '', // 分享标题
        link: window.location.href, // 分享链接
        imgUrl: '', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            alert('分享成功')
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
});
wx.error(function(res){
//    验证失败
});