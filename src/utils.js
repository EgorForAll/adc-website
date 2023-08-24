export const isMobileScreen = () => (window.screen.width < 1152 ? true : false);

const emailCheck = (input) =>
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
    input.value
  );

const nameCheck = (input) => /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(input.value.trim());

const dateCheck = (input) =>
  /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/.test(input.value);

const telephoneCheck = (input) =>
  /^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/.test(input.value);

const isDateValid = (date) => {
  let parts = date.split('-');
  let day = parseInt(parts[2], 10);
  let month = parseInt(parts[1], 10);
  let year = parseInt(parts[0], 10);

  if (year < 2023 || year > 2025 || month == 0 || month > 12) {
    return false;
  }

  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day < 0 || day > monthLength[month - 1]) {
    return false;
  }
};

export const formValidate = (form) => {
  let errors = 0;
  const nameInput = form.querySelector('.name');
  const emailInput = form.querySelector('.email');
  const phoneInput = form.querySelector('.phone');
  const checkboxInput = form.querySelector('#checkbox');
  const dateInput = form.querySelector('#date');

  if (!nameCheck(nameInput)) {
    nameInput.classList.add('error');
    errors++;
  }
  if (!emailCheck(emailInput)) {
    emailInput.classList.add('error');
    errors++;
  }
  if (!telephoneCheck(phoneInput)) {
    phoneInput.classList.add('error');
    errors++;
  }
  if (checkboxInput.checked === false) {
    checkboxInput.classList.add('error');
    errors++;
  }

  if (dateInput.value && dateCheck(dateInput)) {
    if (isDateValid(dateInput.value) === false) {
      dateInput.classList.add('error');
      errors++;
    }
  }

  return errors;
};

export const observerSlide = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slight-right');
    }
  });
});

export const observerOpacity = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-ani');
    }
  });
});
