$(document).ready(function() {
    $nav = $('.nav');
    $tooglCollapse = $('.toogle-collapse');
    /** click event open menu */
    $tooglCollapse.click(function() {
        $nav.toggleClass('collapse');
    });
    // carrusel owl
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });
});






