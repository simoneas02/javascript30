'use strict';

const addClasse = (element, style) => element.classList.add(style);
const removeClasse = (element, style) => element.classList.remove(style);

const showSliderImage = sliderImage => (
  addClasse(sliderImage, 'slide-in--active'), removeClasse(sliderImage, 'slide-in--hide')
);

const hideSliderImage = sliderImage => (
  removeClasse(sliderImage, 'slide-in--active'), addClasse(sliderImage, 'slide-in--hide')
);

const checkSlide = e => {
  const sliderImages = [...document.querySelectorAll('.slide-in')];

  sliderImages.map(sliderImage => {
    const { scrollY, innerHeight } = window;
    const slideInAt = scrollY + innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = scrollY < imageBottom;

    isHalfShown && isNotScrolledPast ? showSliderImage(sliderImage) : hideSliderImage(sliderImage);
  });
};

window.addEventListener('scroll', checkSlide, true);
