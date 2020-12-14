$(function (){
    $('.multiple-items').slick({
        adaptiveHeight: true,
        dots: true,
        dotsClass: 'slick-dots',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 4,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: true,
        swipeToSlide: true,
        variableWidth: true,
        verticalSwiping: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});