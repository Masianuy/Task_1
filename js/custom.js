
'use strict';

// Open/close hidden menu
const btnHamburger = document.querySelector('.button_hamburger');
const menuOpen = document.getElementById('header__nav-phone');
btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle('active-menu');
    menuOpen.classList.toggle('open');
});

$('.slider__wrap').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.slider__arrow-prev'),
  nextArrow: $('.slider__arrow-next'),
  responsive: [
    {
      breakpoint: 690,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }
    }
  ]
});