"use strict";

$(document).ready(function () {
  $(window).scroll(function () {
    this.scrollY > 20 ? ($(".navbar").addClass("sticky"), $(".ggl").addClass("rotadd")) : ($(".navbar").removeClass("sticky"), $(".ggl").removeClass("rotadd")), (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (this.scrollY > 20 ? ($(".ggl").addClass("ocultado"), $(".borrarr").removeClass("animsition"), document.getElementById("div1").removeAttribute("data-aos")) : $(".ggl").removeClass("ocultado")), this.scrollY > 500 ? $(".scroll-up-btn").addClass("show") : $(".scroll-up-btn").removeClass("show");
  }), $(".scroll-up-btn").click(function () {
    $("html").animate({
      scrollTop: 0
    }), $("html").css("scrollBehavior", "auto");
  }), $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  }), $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active"), $(".menu-btn i").toggleClass("active");
  });
  new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: !0
  }), new Typed(".typing-2", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: !0
  });
  $(".carousel").owlCarousel({
    margin: 20,
    loop: !0,
    autoplayTimeOut: 2e3,
    autoplayHoverPause: !0,
    responsive: {
      0: {
        items: 1,
        nav: !1
      },
      600: {
        items: 2,
        nav: !1
      },
      1000: {
        items: 3,
        nav: !1
      }
    }
  });
}), $(document).ready(function () {
  $(".animsition").animsition({
    inClass: "fade-in-left-sm",
    outClass: "fade-out-left-sm",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    loading: !0,
    loadingParentElement: "body",
    loadingClass: "animsition-loading",
    loadingInner: "",
    timeout: !1,
    timeoutCountdown: 5e3,
    onLoadEvent: !0,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: !1,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function transition(e) {
      window.location.href = e;
    }
  });
});