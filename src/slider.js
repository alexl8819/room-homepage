import * as sliderItems from './slider-items.json';

document.addEventListener('DOMContentLoaded', () => {
  const items = new Set(sliderItems || []); /* Represent slider items as a set */
  let marker = 0;
  // Bind next/prev buttons
  const nextBtn = document.querySelector('.slider__next');
  const prevBtn = document.querySelector('.slider__prev');
  const itemArr = Array.from(items);
  nextBtn.addEventListener('click', () => {
    marker = marker >= items.size - 1 ? 0 : ++marker;
    applyContent(itemArr[marker]);
  });
  prevBtn.addEventListener('click', () => {
    marker = marker <= 0 ? items.size - 1 : --marker;
    applyContent(itemArr[marker]);
  });
  applyContent(itemArr[marker]);
});

function applyContent (selected) {
  if (!selected) {
    throw new Error('Invalid item selected: null or undefined');
  }
  
  const heroEl = document.querySelector('.slider__hero');

  for(const [_, className] of heroEl.classList.entries()) {
    if (className.indexOf('bg-mobile-hero') > -1) {
      heroEl.classList.remove(className);
      console.log('removing ' + className);
    }
  }

  heroEl.classList.add(selected.hero);

  const headingEl = document.querySelector('.slider__heading');
  const contentEl = document.querySelector('.slider__content');
  headingEl.innerText = selected.heading;
  contentEl.innerText = selected.content;
}