"use strict";

var selectElement = function selectElement(element) {
  return document.querySelector(element);
};

var menuToggler = selectElement('.menu-toggle');
var body = selectElement('body');
menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

function cambios() {
  $('#onload').fadeOut();
  $('body').removeClass('black');
  $('#princi').removeClass('opacity');
  $('#section2').removeClass('opacity');
  $('#section3').removeClass('opacity');
  $('#section4').removeClass('opacity');
  $('#section5').removeClass('opacity');
  $('#section6').removeClass('opacity');
  $('#section7').removeClass('opacity');
}

window.onload = function () {
  setInterval("cambios()", 1500);
};

new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPlV3-LICENSE',
  autoScrolling: true,
  navigation: true,
  onLeave: function onLeave(origin, destination, direction) {
    var section = destination.item;
    var title = section.querySelector('.sub-headlineR');
    var t1 = new TimelineMax({
      delay: 0.5
    });
    t1.fromTo(title, 0.5, {
      y: '50',
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    });
  }
});
/* 
    eL EFECTO DEL SCROLLING SUAVE DEL PROTAFOLIO DE KHUON YAGI SE HACE CON LA LIBRERIA FULLPAGE.JS
*/