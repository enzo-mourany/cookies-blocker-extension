import { browser } from 'webextension-polyfill-ts';

function modifyPage() {
  // Select the first h1 element on the page
  const h1 = document.querySelector('h1');

  // Modify the text of the element
  if (h1) {
    h1.textContent = 'My Extension';
  }
}

// Execute the function when the DOM is ready
document.addEventListener('DOMContentLoaded', modifyPage);

