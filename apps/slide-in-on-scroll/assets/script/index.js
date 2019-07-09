'use strict';

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const addStyle = (element, style) => element.classList.add(style);
const removeStyle = (element, style) => element.classList.remove(style);

const showSliderImage = sliderImage => (
  addStyle(sliderImage, 'slide-in--active'), removeStyle(sliderImage, 'slide-in--hide')
);

const hideSliderImage = sliderImage => (
  removeStyle(sliderImage, 'slide-in--active'), addStyle(sliderImage, 'slide-in--hide')
);

const sliderImages = [...document.querySelectorAll('.slide-in')];

const checkSlide = () =>
  sliderImages.map(sliderImage => {
    const { scrollY, innerHeight } = this;
    const slideInAt = scrollY + innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = scrollY < imageBottom;
    isHalfShown && isNotScrolledPast ? showSliderImage(sliderImage) : hideSliderImage(sliderImage);
  });

window.addEventListener('scroll', debounce(checkSlide), true);
