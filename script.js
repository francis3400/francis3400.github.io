const hamburger = document.querySelector('.mobile-menu .navMenu');
const mobileDisplay = document.querySelector('.mobile-display');
const cancel = document.querySelector('.cancel-icon');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('#mobile-nav');
hamburger.addEventListener('click', () => {
  mobileDisplay.classList.add('show');
  body.classList.add('overflowHidden');
});

cancel.addEventListener('click', () => {
  mobileDisplay.classList.remove('show');
  body.classList.remove('overflowHidden');
});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileDisplay.classList.remove('show');
    body.classList.remove('overflowHidden');
  });
});
