$(function (){
    $('.multiple-items').slick({
        adaptiveHeight: true,
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 4,
        swipe: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        autoplaySpeed: 1000,
        variableWidth: false,
    });
});