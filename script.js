const hamburger = document.querySelector('.mobile-menu .navMenu');
const mobileDisplay = document.querySelector('.mobile-display');
const cancel = document.querySelector('.cancel-icon');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('#mobile-nav');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const cancelsModal = document.querySelector('.cancels');
const works = document.querySelector('#cards');



//Form validation 

let form = document.querySelector('#contact-style form'),
  errMessageZone = document.querySelector('#error-message'),
  emailClass = document.querySelector('#contact-style .email');

form.addEventListener('submit', (event) => {
  console.log("11FHFFFFFFFFFFFFFFF1")
  let email = document.querySelector('#email');
  let emailRegExp = /[A-Z]/;
  console.log("FHFFFFFFFFFFFFFFF1")
  console.log(email.value)
  console.log(email.value.trim())
  if (!emailRegExp.test(email.value.trim())) {
    console.log("FHFFFFFFFFFFFFFFF2")
    form.submit();
  } else {
    event.preventDefault();
    //emailClass.classList.toggle('error');
    console.log("FHFFFFFFFFFFFFFFF")
    errMessageZone.innerText ="Lower Case Email Please"
  }
});

