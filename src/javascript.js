window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 20);
    });

    $('.carousel').carousel({
        interval: 2500,
        pause: false

    });

});

$(document).ready(function () {

    $('.top-carousel').slick({
        rtl: true,
        arrows: true

    });


    $('.client-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]



        // 'setting-name': setting - value
    });
});