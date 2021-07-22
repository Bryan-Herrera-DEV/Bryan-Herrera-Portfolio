/*==============================================================================

 * Template Name: Zuman - Creative Personal Portfolio
 * Template URI: 
 * Author: ixtheme - (https://themeforest.net/user/ixtheme)
 * Description: Personal Portfolio Template
 * Version: 1.0
 * Copyright 2018 ixtheme

==============================================================================
    
    [Table of jQuery contents]
    ===================
	
    01. PreLoader Init
    02. ProjectFilter Init
    03. HeaderFixed Init
    04. CounterUp Init
    05. ResponsiveMenu Init
    06. NavActiveClass Init
        -- Smooth-Scroll Init
    07. AboutImg init
    08. ProjectDetails Init
    09. TestimonialCarousel Init
    10. BackgroundImage Init

==============================================================================*/


(function ($) {
    "use strict";

    $(window).on('load', function () {

        /* 01. PreLoader Init
        ============================ */
        function preLoader() {
            setTimeout(function () {
                $('#preloader .scroll-static').addClass('loaded');
                setTimeout(function () {
                    $('#preloader').addClass('loaded');
                    setTimeout(function () {
                        $('#preloader').remove();
                    }, 400);
                    
                    /* Splitting js init
                    ============================ */
                    Splitting();

                }, 600);
            }, 1000);
        };
        preLoader();

        /* 02. ProjectFilter Init
        ============================ */
		function projectFilter() {
			var $gridt = $('.works');
			$gridt.isotope();
			$('.filter-buttons').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				$gridt.isotope({
					filter: filterValue
				});
				$(this).addClass('active').siblings().removeClass('active');
			});
		};
		projectFilter();


    });


    $(window).on('scroll', function () {

        /* 03. HeaderFixed Init
        ============================ */
        function headerFixed() {
            if ($(window).scrollTop() >= 1) {
                $('header').addClass('header_fixed');
            } else {
                $('header').removeClass('header_fixed');
            }
        };
        headerFixed();

    });


    $(document).ready(function () {

        /* 04. CounterUp Init
        ============================ */
        function countUp() {
            $('.counter-number').counterUp({
                delay: 10,
                time: 1000
            });
        };
        countUp();

        /* 05. ResponsiveMenu Init
        ============================ */
        function responsiveMenu() {
            $('.nav-btn').on('click', function () {
                $('header').toggleClass('header_bg');
                $('.nav-btn span').toggleClass('ion-android-close ion-android-menu');
                $('.menu_items').toggleClass('show');
                $('body').toggleClass('no-scroll');
            });
            $('.menu_item').on('click', function () {
                $('header').removeClass('header_bg');
                if($('.nav-btn span').hasClass('ion-android-close')) {
                    $('.nav-btn span').toggleClass('ion-android-menu ion-android-close');
                };
                $('.menu_items').removeClass('show');
                $('body').removeClass('no-scroll');
            });
        };
        responsiveMenu();

        /* 06. NavActiveClass Init
        ============================ */
        function navActiveClass() {

            $('body').scrollspy({ 
                target: '#menu_items',
                offset: 50,
            });

            // Smooth-Scroll Init
            $('a.menu_item, a.go_top').on("click", function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html, body").animate({
                            scrollTop: target.offset().top
                        }, 1000, "easeInOutExpo");
                        return false;
                    }
                }
                return false;
            });
        
        };
        navActiveClass();

        /* 07. AboutImg init
        ============================ */
        function aboutImg() {
            $('.about_img_2.bottom').on('click', function () {
                $(this).addClass('top').removeClass('bottom');
                $('.about_img_1').addClass('bottom').removeClass('top');
            });
            $('.about_img_1').on('click', function () {
                $(this).addClass('top').removeClass('bottom');
                $('.about_img_2').addClass('bottom').removeClass('top');
            });
        };
        aboutImg();

        /* 08. ProjectDetails Init
        ============================ */
        function projectDetails() {
            $('.ajax-popup-link').magnificPopup({
                settings: null,
                type: 'ajax',
                closeOnContentClick: false,
                closeBtnInside:false,
                callbacks:{
                    ajaxContentAdded: function() {
                      $(".mfp-content").find("*").addClass("mfp-prevent-close");
                    },
                    open: function() {
                        $('html').addClass('layout-fixed');
                    },
                    close: function() {
                        $('html').removeClass('layout-fixed');
                    }
                 }
            });
        };
        projectDetails();

        /* 09. TestimonialCarousel Init
        ============================ */
        function testimonialCarousel() {
            $('.owl-carousel.testimonial_slider').owlCarousel({
                loop:true,
                items:1,
                margin:0,
                autoplay:true,
                nav:false,
                dots:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true,
            });
        };
        testimonialCarousel();

        /* 10. BackgroundImage Init
        ============================ */
        function bgImage() {
            $('.bg-img').each(function () {
                var src = $(this).attr('data-src');
                $(this).css({
                    'background-image': 'url(' + src + ')'
                });
            });
        };
        bgImage();

    });


})(jQuery);