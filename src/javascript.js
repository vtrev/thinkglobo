window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const navbarLinks = document.querySelectorAll('.navbar a');


	navbarLinks.forEach(elem => elem.addEventListener('click', navbarTogglerClick));

	function navbarTogglerClick(event) {
        smoothScroll(event); //Call 'smoothScroll' function
    }

    function smoothScroll(event) {
		event.preventDefault(); ///Avoid default auto from 'window.scroll' builtin function
		const targetId = event.currentTarget.getAttribute('href');
		window.scrollTo({
			top: targetId === '#' ? 0 : document.querySelector(targetId).offsetTop,
			behavior: 'smooth',
        });
    }


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
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]



        // 'setting-name': setting - value
    });
});