window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 20);
    });

    $('.carousel').carousel({
        interval:2500,
        pause: false

      })
});
