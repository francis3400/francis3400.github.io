const hamburger = document.querySelector('.mobile-menu .navMenu');
const mobileDisplay = document.querySelector('.mobile-display');
const cancel = document.querySelector('.cancel-icon');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('#mobile-nav');
const personName = document.querySelector('.blinks');
hamburger.addEventListener('click', () => {
  mobileDisplay.classList.add('show');
  body.classList.add('overflowHidden');
  console.log('hamburger');
});


personName.addEventListener('click', () => {
  mobileDisplay.classList.add('show');
  body.classList.remove('overflowHidden');
  console.log('personName');
});
