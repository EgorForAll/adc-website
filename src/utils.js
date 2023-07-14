export const isMobileScreen = () => window.screen.width < 1152 ? true : false;

const emailCheck = (input) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ .test(input.value);

const nameCheck = (input) => /^[a-z]+$/i.test(input.value) && input.value.length >= 2;

export const formValidate = (form, phoneMask) => {
  let errors = 0;
  const nameInput = form.querySelector('.name');
  const emailInput = form.querySelector('.email');
  const phoneInput = form.querySelector('.phone');
  const checkboxInput = form.querySelector('#checkbox');
  const checkboxLabel = form.querySelector('.checkbox-label ');
  console.log(checkboxLabel);
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
    checkboxLabel.classList.add('error-checkbox');
    errors++;
  }
  console.log(errors)
  return errors;
}

export async function formSend (evt, form) {
  evt.preventDefault();
  const errorsTotal = formValidate(form);

  if (errorsTotal === 0) {
    console.log('Ошибок нет')
  } else {
    alert('Заполните обязательные поля формы');
  }
}


