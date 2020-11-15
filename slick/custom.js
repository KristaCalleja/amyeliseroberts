$(function (){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 4,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        swipe: true,
        swipeToSlide: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
});