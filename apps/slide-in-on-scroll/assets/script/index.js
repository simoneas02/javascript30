'use strict';

const checkSlide = () => {
  const sliderImages = [...document.querySelectorAll('.slide-in')];
  sliderImages.map(sliderImage => {
    console.log(`I'm scrolling`);
  });
};

window.addEventListener('scroll', checkSlide);
