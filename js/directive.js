/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module("app.directive", []);

//  body元素上的指令
var count = 0;
app.directive("appDirective", function(){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            var $body = $(ele);         // body
            var $menu = $body.find("#menu-content");        // menu-content
            var $choosetype = $("#choose-type");            // choose-type

            $body.find("#menu").on("click", function(){
                $menu.removeClass('actionIn').removeClass('actionOut');
                if(count % 2){
                    $menu.addClass('actionOut');
                } else {
                    $menu.addClass('actionIn');
                }
                count++;
            })

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
})
