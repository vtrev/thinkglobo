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
    $('.client-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true,
        infinite: true,
        // dots: true,



        // 'setting-name': setting - value
    });
});