export const isMobileScreen = () => window.screen.width < 1152 ? true : false;

const emailCheck = (input) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ .test(input.value);

const nameCheck = (input) => /^[a-z]+$/i.test(input.value) && input.value.length >= 2;

export const loaderTemplate = () => `<span class="loader"></span>`;

export const overlayTemplate = () => `<div class="overlay"></div>`;

export const formValidate = (form, phoneMask) => {
  let errors = 0;
  const nameInput = form.querySelector('.name');
  const emailInput = form.querySelector('.email');
  const phoneInput = form.querySelector('.phone');
  const checkboxInput = form.querySelector('#checkbox');
  const checkboxLabel = form.querySelector('.checkbox-label ');
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

export async function formSend (evt, form) {
  evt.preventDefault();
  const errorsTotal = formValidate(form);
  let formData = new FormData(form);

  if (errorsTotal === 0) {
    // let response = await fetch('sendmail.php', {
    //   method: 'POST',
    //   body: formData
    // });
    // if (response.ok) {
    //   let result = await response.json();
    //   alert(result.message);
    //   form.reset();
    // } else {
    //   alert('Ошибка');
    //   }
    } else {
    alert('Заполните обязательные поля формы');
  }
}


