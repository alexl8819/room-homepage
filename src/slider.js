import * as sliderItems from './slider-items.json';

document.addEventListener('DOMContentLoaded', () => {
  const items = new Set(sliderItems || []); /* Represent slider items as a set */
  let cursor = 0;
  // Bind next/prev buttons
  const nextBtn = document.querySelector('.slider__next');
  const prevBtn = document.querySelector('.slider__prev');
  const itemArr = Array.from(items);
  // Setup listeners
  nextBtn.addEventListener('click', () => {
    cursor = cursor >= items.size - 1 ? 0 : ++cursor;
    applyContent(itemArr[cursor]);
  });
  prevBtn.addEventListener('click', () => {
    cursor = cursor <= 0 ? items.size - 1 : --cursor;
    applyContent(itemArr[cursor]);
  });
  applyContent(itemArr[cursor]);
});

function applyContent (selected) {
  if (!selected) {
    throw new Error('Invalid item selected: null or undefined');
  }
  
  const heroEl = document.querySelector('.slider__hero');

  for(const [_, className] of heroEl.classList.entries()) {
    if (className.indexOf('bg-mobile-hero') > -1) {
      heroEl.classList.remove(className);
    }
  }

  heroEl.classList.add(selected.hero);

  const headingEl = document.querySelector('.slider__heading');
  const contentEl = document.querySelector('.slider__content');

  headingEl.innerText = selected.heading;
  contentEl.innerText = selected.content;
}