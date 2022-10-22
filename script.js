// Form validation

const form = document.querySelector('#contact-style form');
const errMessageZone = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  const email = document.querySelector('#email');
  const emailRegExp = /[A-Z]/;
  if (!emailRegExp.test(email.value.trim())) {
    form.submit();
  } else {
    event.preventDefault();
    // emailClass.classList.toggle('error');
    errMessageZone.innerText = 'Lower Case Email Please';
  }
});
