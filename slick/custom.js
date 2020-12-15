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
        autoplaySpeed: 1000,
        verticalSwiping: false,        
        variableWidth: true,
        responsive: [
            {
                // breakpoint: 1024,
                // settings: {
                //   'unslick'
                // }
              },
              {
                breakpoint: 575,
                settings: {
                  'unslick'
                }
              },
        ]
    });
});