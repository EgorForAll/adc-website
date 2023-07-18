export const isMobileScreen = () => window.screen.width < 1152 ? true : false;

const emailCheck = (input) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ .test(input.value);

const nameCheck = (input) => /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(input.value);

export const successTemplate = () => `<div class="success-message"> <span class="succes-message__text">Ваша заявка успешно доставена. Наш менеджер свяжется с вами в ближайшее время</span>
  </div>`

export const loaderTemplate = () => `<span class="loader"></span>`;

export const overlayTemplate = () => `<div class="overlay"></div>`;

export const formValidate = (form, phoneMask) => {
  let errors = 0;
  const nameInput = form.querySelector('.name');
  const emailInput = form.querySelector('.email');
  const phoneInput = form.querySelector('.phone');
  const checkboxInput = form.querySelector('#checkbox');
  if (!nameCheck(nameInput)) {
    nameInput.classList.add('error');
    errors++;;
  }
  if (!emailCheck(emailInput)) {
    emailInput.classList.add('error');
      errors++;
  }
  if (!phoneMask.masked.isComplete) {
    phoneInput.classList.add('error');
    errors++;
  }
  if (checkboxInput.checked === false) {
    checkboxInput.classList.add('error');
    errors++;
  }
  return errors;
}

export const removeNode = (parent, node) => setTimeout(() => {
  parent.removeChild(node);
}, 1000);


export const observerSlide = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slight-right');
    }
  });
});

export const observerOpacity = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('intro-ani');
    }
  });
});
