$(document).ready(function() {

    // loader
    setTimeout(function() {
        $('.loaders').fadeOut();
    }, 100);


    $(function() {
        var current = window.location.href;

        $(".nav-link").each(function() {
            var link = $(this).prop("href");

            if (current === link) {
                $(".nav-link").removeClass("active");
                $(this).addClass("active");
            }
        });

    });





    // scroll-Top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }

    });

    $('.scrolltotop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // fixedtop
    $(window).scroll(function() {
        var headerTopHeight = $(".header-area").outerHeight();
        var totalHeight = headerTopHeight;
        var utd = $(window).scrollTop();

        if (utd > totalHeight) {
            $(".header-area").addClass("shadows");
        } else {
            $(".header-area").removeClass("shadows");
        }
        return false;
    });



    $('.blogs-slide').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 600,
        focusOnSelect: false,
        arrows: false,
        nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
        prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });


    $('.trendings').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 600,
        focusOnSelect: false,
        arrows: false,
        nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
        prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });


    $('.lead-group').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 600,
        focusOnSelect: false,
        arrows: false,
        nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
        prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 6,
                }
            }, {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });


    $('.testislider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        focusOnSelect: false,
        arrows: false,
        nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
        prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
    });



    $('.blogslider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 600,
        focusOnSelect: false,
        arrows: false,
        nextArrow: '<span class="next"><i class="bi bi-chevron-right"></i></span>',
        prevArrow: '<span class="prev"><i class="bi bi-chevron-left"></i></span>',
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });




    $(function() {
        AOS.init({
            ease: 'slide',
            once: true
        });
    });




});