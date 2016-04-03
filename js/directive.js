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

            //  header ͷ���˵���ť����
            $body.find("#menu").on("click", function(){
                $menu.removeClass('actionIn').removeClass('actionOut');
                if(count % 2){
                    $menu.addClass('actionOut');
                } else {
                    $menu.addClass('actionIn');
                }
                count++;
            });

            //  �˵����֮��Ŀ���
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

//  �ֲ����������ִ��
app.directive('swiper', function(){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
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

//  �˵�����ִ��
app.directive('menuContainer', function(){
    return {
        restrict : 'EA',
        link : function(scope, ele, attr){
            //menu  scroll bar 
            $(ele).niceScroll({
                cursorcolor: "rgba(0,0,0,0)", // �����ɫ
                cursoropacitymax: 1, //�ı䲻͸���ȷǳ���괦�ڻ״̬��scrollabar���ɼ���״̬������Χ��1��0
                touchbehavior: false, //ʹ����϶���������̨ʽ���Դ����豸
                cursorwidth: "5px", //���ع��Ŀ��
                cursorborder: "0", //   �α�߿�css����
                cursorborderradius: "5px", //������Ϊ���߽�뾶
                autohidemode: false //�Ƿ����ع�����
            });
        }
    }
});