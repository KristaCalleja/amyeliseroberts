$(function (){
    $('.multiple-items').slick({
        adaptiveHeight: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 4,
        swipe: false,
        arrows: false,
        centerMode: true,
        centerPadding: '5',
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        autoplaySpeed: 3000,
        verticalSwiping: false,        
        variableWidth: true
    });
});