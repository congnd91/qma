(function ($) {
    $(document).on('ready', function () {
        "use strict";
        $('#page-loader').delay(800).fadeOut(600, function () {
            $('body').fadeIn();
        });
        new WOW().init();
        var win = $(window);
        if ($(win).scrollTop() >= 100) {
            $('.header').removeClass("header-small");
        }
        win.on('scroll', function () {
            if ($(this).scrollTop() >= 100) {
                $('.header').addClass("header-small");
            } else {
                $('.header').removeClass("header-small");
            }
        });
        $('.menu-icon').on('click', function () {
            $('body').toggleClass("open-menu");
            setTimeout(scrollToTop, 0);
        });
        $('.menu-res li.menu-item-has-children').on('click', function (event) {
            event.stopPropagation();
            var submenu = $(this).find(" > ul");
            if ($(submenu).is(":visible")) {
                $(submenu).slideUp();
                $(this).removeClass("open-submenu-active");
            } else {
                $(submenu).slideDown();
                $(this).addClass("open-submenu-active");
            }
        });

        $('.menu-res li.menu-item-has-children > a').on('click', function () {
            //  return false;
        });


        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: true,
            autoplaySpeed: 8000,
            infinite: false,
            pauseOnHover: false,
            speed: 1000

        });
        $('.slider-nav').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: false,
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 8000,
            vertical: true,
            infinite: false,
            pauseOnHover: false,
            speed: 1000
        });

        var fancybox = $('.fancybox');
        if ($(fancybox).length) {
            $(fancybox).fancybox({
                helpers: {
                    title: {
                        type: 'outside'
                    },
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                },
                'nextEffect': 'none',
                'prevEffect': 'none'
            });
        }
    });


})(jQuery);
