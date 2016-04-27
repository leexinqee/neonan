/**
 * Created by Administrator on 2016/4/27.
 */

"use strict";
var page = require('webpage').create();
var fs = require('fs');
phantom.outputEncoding = 'gbk';
page.open('http://phptest.neonan.com/frontend/#/index/contentdetail/49389', function (status) {
    //console.log(status);
    //page.render('./pic/example.png');
    //console.log("render end");
    if(status=='success'){
        var html = page.evaluate(function(){

            return document.getElementsByTagName("html")[0].innerHTML;

        });
        //for(var i = 0;i<title.length;i++){
        //    console.log(title[i].nodeName)
        //}
        var s = "<!DOCTYPE html><html>"+html+"</html>";
        fs.write("../output.html", s, 'w');
        console.log('end');
        //console.log('title'+title.innerHTML);
        //page.onResourceReceived = function(response){
        //    for(var i in response){
        //        console.log(i+":"+response[i]);
        //    }
            phantom.exit();
        //}

    }

});
