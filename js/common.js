$(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function NAVMENU() {
        $('.menu_item > a').mouseover(function () {
            $('.hd_wrap').addClass('nav_active');
            $('.deps_box').slideDown();
        });

        $('.hd_wrap').mouseleave(function () {
            $('.deps_box').hide();
            $(this).removeClass('nav_active');
        });
    }
    NAVMENU();

    $(window).on('scroll', function () {
        HDSCROLL();
    });

    function HDSCROLL() {
        if ($(this).scrollTop() >= 100) {
            $('#new_hd').addClass('scroll_active');
        } else {
            $('#new_hd').removeClass('scroll_active');
        }
    }

    function MAINSLIDER() {
        const arrowprev = $('.arrows_prev');
        const arrownext = $('.arrows_next');
        $('.slider_box').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            fade: true,
            dots: false,
            cssEase: 'linear',
            pauseOnHover: false,
            prevArrow: arrowprev,
            nextArrow: arrownext,
        });
    }
    MAINSLIDER();

    function MONAV() {
        $('.bars_btn').click(function () {
            $('.mo_nav_wrap').addClass('mo_nav_active');
            $(".mo_bg").fadeIn(300);
        });

        $(".bars_close").click(function() {
            $('.mo_nav_wrap').removeClass('mo_nav_active');
            $(".mo_bg").fadeOut(300);
        });

        $('.mo_menu_ob').click(function () {
            //slide up all the link lists
            $('.mo_deps_box').slideUp();
            $('.mo_menu_ob > a > span').removeClass('arrows_active');
            //slide down the link list below the h3 clicked - only if its closed
            if (!$(this).next().is(':visible')) {
                $(this).next().slideDown();
                $(this).find('span').addClass('arrows_active');
            }
        });
    }
    MONAV();

    var resizeTimerInternal;

    $(window).on('resize', function () {
        clearTimeout(resizeTimerInternal);

        resizeTimerInternal = setTimeout(function () {
            //add functions here to fire on resize
            slickSliderWithResize();
        }, 100);
    });

    function slickSliderWithResize() {
        if ($(window).width() < 885) {
            if ($('.works_list').hasClass('slick-initialized')) {

            } else {
                $('.works_list').slick({
                    autoplay: true,
                    autoplaySpeed: 2000,
                    centerMode: true,
                    centerPadding: '60px',
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    speed: 500,
                    dots: false,
                    arrows: false,
                    cssEase: 'linear',
                    responsive: [
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow: 1,
                            }
                        }
                    ]
                });
            }
        } else {
            if ($('.works_list').hasClass('slick-initialized')) {
                $('.works_list').slick("unslick");
            }
        }
    }
    slickSliderWithResize();

});
