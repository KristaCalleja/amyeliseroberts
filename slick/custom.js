$(function (){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
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