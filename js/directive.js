/**
 * Created by lenovo on 2016/4/2.
 */
var app = angular.module("app.directive", []);

//  bodyԪ���ϵ�ָ��   ����menu�˵���ָ��
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
});

app.directive('swiper', function(){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            var $swiper = $(ele);
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplay:4000,
                loop : true
            });
        }
    }
});

