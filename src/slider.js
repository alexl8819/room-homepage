import * as sliderItems from './slider-items.json';

import mbHeroImageOne from './images/mobile-image-hero-1.jpg';
import dsHeroImageOne from './images/desktop-image-hero-1.jpg'
import mbHeroImageTwo from './images/mobile-image-hero-2.jpg';
import dsHeroImageTwo from './images/desktop-image-hero-2.jpg';
import mbHeroImageThree from './images/mobile-image-hero-3.jpg';
import dsHeroImageThree from './images/desktop-image-hero-3.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const items = new Set(sliderItems || []); /* Represent slider items as a set */
  let cursor = 0;
  let isLargeViewport = false;
  // Bind next/prev buttons
  const nextBtn = document.querySelector('#slider-next');
  const prevBtn = document.querySelector('#slider-prev');
  const itemArr = Array.from(items);  
  // Setup listeners
  attachHandler(nextBtn, () => {
    cursor = cursor >= items.size - 1 ? 0 : ++cursor;
    applyContent(itemArr[cursor], isLargeViewport);
  }, 'R');
  attachHandler(prevBtn, () => {
    cursor = cursor <= 0 ? items.size - 1 : --cursor;
    applyContent(itemArr[cursor], isLargeViewport);
  }, 'L');
  window.addEventListener('resize', () => {
    isLargeViewport = window.innerWidth >= 768 ? true : false;
    applyContent(itemArr[cursor], isLargeViewport);
  });
  // Execute initial content
  isLargeViewport = window.innerWidth >= 768 ? true : false;
  applyContent(itemArr[cursor], isLargeViewport);
});

function attachHandler (node, handler, direction) {
  window.addEventListener('keydown', ({ code }) => {
    if (code === 'ArrowLeft' && direction === 'L' || code === 'ArrowRight' && direction === 'R') {
      handler();
    }
  });
  node.addEventListener('click', handler);
}

function applyContent (selected, isLargeViewport) {
  if (!selected) {
    throw new Error('Invalid item selected: null or undefined');
  }
  
  const heroEl = document.querySelector('#slider-hero');
  let imgUrl;

  switch (selected.hero) {
    case 1:
      imgUrl = `url(${!isLargeViewport ? mbHeroImageOne : dsHeroImageOne})`;
      break;
    case 2:
      imgUrl = `url(${!isLargeViewport ? mbHeroImageTwo : dsHeroImageTwo})`;
      break;
    case 3:
      imgUrl = `url(${!isLargeViewport ? mbHeroImageThree : dsHeroImageThree})`;
      break;
  }

  heroEl.style.backgroundImage = imgUrl;

  const headingEl = document.querySelector('#slider-heading');
  const contentEl = document.querySelector('#slider-content');

  headingEl.innerText = selected.heading;
  contentEl.innerText = selected.content;
}
