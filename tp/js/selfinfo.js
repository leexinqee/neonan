/**
 * Created by lenovo on 2016/5/18.
 */
(function(){
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
            // 上传图片base64
            // TODO...


            $("#crop-box").modal("hide");
        });
    });

    // 资料修改显示
    $("#modified-info").on("click", function(){
        $('.changeInfoPanel').modal('show');
    });

    $(".close-dialog").on("click", function(){
        $('.changeInfoPanel').modal('hide');
    })
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
})()