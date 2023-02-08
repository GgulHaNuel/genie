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
            autoplaySpeed: 5000,
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
});
