AOS.init({});
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
    if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('.ggl').addClass("rotadd");
            $('.menu-btn').removeClass("cambio");
        }else{
            $('.navbar').removeClass("sticky");
            $('.ggl').removeClass("rotadd");
            $('.menu-btn').addClass("cambio");
        }
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i) ){
                if(this.scrollY > 20){
                
                    $('.ggl').addClass("ocultado");
                    $('.borrarr').removeClass("animsition");
                    
                    document.getElementById("div1").removeAttribute("data-aos");               
                    document.getElementById("div2").removeAttribute("data-aos");               
                    document.getElementById("div3").removeAttribute("data-aos");               
                    document.getElementById("div4").removeAttribute("data-aos");               
                    document.getElementById("div5").removeAttribute("data-aos");               
                    
                    
                    
                    
                    $('.menu-btn').removeClass("cambio");

                }else{
                
                    $('.ggl').removeClass("ocultado");
                    $('.menu-btn').addClass("cambio");
                }
        } else {
       
         }
        
       // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.circular-menu').addClass("show");
        } else {
            $('.circular-menu').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$(document).ready(function() {
        $(".animsition").animsition({
          inClass: 'fade-in-left-sm',
          outClass: 'fade-out-left-sm',
          inDuration: 1500,
          outDuration: 800,
          linkElement: '.animsition-link',
          // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
          loading: true,
          loadingParentElement: 'body', //animsition wrapper element
          loadingClass: 'animsition-loading',
          loadingInner: '', // e.g '<img src="loading.svg" />'
          timeout: false,
          timeoutCountdown: 5000,
          onLoadEvent: true,
          browser: [ 'animation-duration', '-webkit-animation-duration'],
          // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
          // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
          overlay : false,
          overlayClass : 'animsition-overlay-slide',
          overlayParentElement : 'body',
          transition: function(url){ window.location.href = url; }
        });
      });
