$('.intro__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
            breakpoint: 768,
            settings: {

                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {

                slidesToShow: 1
            }
        }
    ],
    prevArrow: "<img class='a-left control-c prev slick-prev' src='img/icon/left-arrow.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='img/icon/right-arrow.png'>"
});

//$('.upcoming__slider-slides').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: false,
//});

$('.latest__slider__cart').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
            breakpoint: 1200,
            settings: {

                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {

                slidesToShow: 1
            }
        }

    ],
    prevArrow: "<img class='a-left control-c prev slick-prev' src='img/icon/left-arrow.png'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='img/icon/right-arrow.png'>"
});
// howler
// var sound = new Howl({
//     src: ['./../123.mp3']
// });

// sound.play();