import mbHeroImageOne from './images/mobile-image-hero-1.jpg';
import dsHeroImageOne from './images/desktop-image-hero-1.jpg'
import mbHeroImageTwo from './images/mobile-image-hero-2.jpg';
import dsHeroImageTwo from './images/desktop-image-hero-2.jpg';
import mbHeroImageThree from './images/mobile-image-hero-3.jpg';
import dsHeroImageThree from './images/desktop-image-hero-3.jpg';

export default function initialize (sliderItems) {
  const items = new Set(sliderItems || []); /* Represent slider items as a set */
  let cursor = 0;
  let isLargeViewport = window.innerWidth >= 768;
  // Bind main slider
  const heroEl = document.querySelector('#hero-slider');
  // Bind next/prev buttons
  const nextBtn = document.querySelector('#slider-next');
  const prevBtn = document.querySelector('#slider-prev');

  const itemArr = Array.from(items);  
  // Setup listeners
  bindHandler(nextBtn, () => {
    cursor = cursor >= items.size - 1 ? 0 : ++cursor;
    applyContent(heroEl, itemArr, cursor, isLargeViewport);
  });
  bindHandler(prevBtn, () => {
    cursor = cursor <= 0 ? items.size - 1 : --cursor;
    applyContent(heroEl, itemArr, cursor, isLargeViewport);
  });
  window.addEventListener('resize', () => {
    isLargeViewport = window.innerWidth >= 768;
    applyContent(heroEl, itemArr, cursor, isLargeViewport);
  });
  // Execute initial content
  applyContent(heroEl, itemArr, cursor, isLargeViewport);
}

function bindHandler (node, handler) {
  window.addEventListener('keydown', ({ code }) => {
    if (code === 'ArrowLeft' || code === 'ArrowRight') {
      handler();
    }
  });
  node.addEventListener('click', handler);
}

function applyContent (to, content, selected, isLargeViewport) {
  if (!Array.isArray(content)) {
    throw new Error('Invalid structure: Not an array');
  }
  
  let imgUrl;

  switch (selected) {
    case 0:
      imgUrl = `url(${!isLargeViewport ? mbHeroImageOne : dsHeroImageOne})`;
      break;
    case 1:
      imgUrl = `url(${!isLargeViewport ? mbHeroImageTwo : dsHeroImageTwo})`;
      break;
    case 2:
      imgUrl = `url(${!isLargeViewport ? mbHeroImageThree : dsHeroImageThree})`;
      break;
  }

  to.style.backgroundImage = imgUrl;

  const headingEl = document.querySelector('#slider-heading');
  const contentEl = document.querySelector('#slider-content');

  headingEl.innerText = content[selected].heading;
  contentEl.innerText = content[selected].content;
}
