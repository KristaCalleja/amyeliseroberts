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
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 600,
                settings: {
                  unslicked: true,
                  adaptiveHeight: false,
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: false,
                  speed: 300
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  speed: 300
                }
              }
        ]
    });
});