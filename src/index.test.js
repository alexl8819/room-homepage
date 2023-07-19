import { fireEvent, getByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

describe('index.html', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  })

  it('renders the first slider heading', () => {
    expect(container.querySelector('#slider-heading')).toHaveTextContent('Discover innovative ways to decorate');
  });

  it('renders the first slider content', () => {
    expect(container.querySelector('#slider-content')).toHaveTextContent('We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.');
  });

  it('renders new slider heading and content when a previous slider action button is clicked', () => {
    const prevBtn = container.querySelector('#slider-prev'); // getByLabelText(container, { name: 'previous-slide-action' });
    fireEvent.click(prevBtn);
    expect(container.querySelector('#slider-heading')).toHaveTextContent('Manufactured with the best materials');
  });
});