$(function() {
    // 首页轮播初始化
    var indexSwiper = new Swiper('#index-slider', {
        pagination: '#slider-pagination',
        paginationClickable: true,
        autoplay: 4000,
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
    });
    // 小推荐轮播初始化
    var small = new Swiper('#small-recomand', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true,
        slidesPerViewFit:false
    });
})
