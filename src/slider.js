import * as sliderItems from './slider-items.json';

import heroImageOne from './images/mobile-image-hero-1.jpg';
import heroImageTwo from './images/mobile-image-hero-2.jpg';
import heroImageThree from './images/mobile-image-hero-3.jpg';

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
  let imgUrl;

  switch (selected.hero) {
    case 1:
      imgUrl = `url(${heroImageOne})`;
      break;
    case 2:
      imgUrl = `url(${heroImageTwo})`;
      break;
    case 3:
      imgUrl = `url(${heroImageThree})`;
      break;
  }

  heroEl.style.backgroundImage = imgUrl;

  const headingEl = document.querySelector('.slider__heading');
  const contentEl = document.querySelector('.slider__content');

  headingEl.innerText = selected.heading;
  contentEl.innerText = selected.content;
}
