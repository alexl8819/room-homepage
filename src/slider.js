import * as sliderItems from './slider-items.json';

document.addEventListener('DOMContentLoaded', () => {
  const items = new Set(sliderItems || []); /* Represent slider items as a set */
  let marker = 0;
  // Bind next/prev buttons
  const nextBtn = document.querySelector('.slider__next');
  const prevBtn = document.querySelector('.slider__prev');
  nextBtn.addEventListener('click', () => {
    if (marker >= items.size) {
      return;
    }
    applyContent(Array.from(items)[marker++]);
  });
  prevBtn.addEventListener('click', () => {
    if (marker <= 0) {
      return;
    }
    applyContent(Array.from(items)[marker--]);
  });
  applyContent(Array.from(items)[marker]);
});

function applyContent (selected) {
  if (!selected) {
    throw new Error('Invalid item selected: null or undefined');
  }
  const headingEl = document.querySelector('.window__heading');
  const contentEl = document.querySelector('.window__content');
  headingEl.innerText = selected.heading;
  contentEl.innerText = selected.content;
}