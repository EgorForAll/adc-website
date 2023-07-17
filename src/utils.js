export const isMobileScreen = () => window.screen.width < 1152 ? true : false;

const emailCheck = (input) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ .test(input.value);

const nameCheck = (input) => /^[а-яА-Я]+$/i.test(input.value);

export const loaderTemplate = () => `<span class="loader"></span>`;

export const overlayTemplate = () => `<div class="overlay"></div>`;

export const formValidate = (form, phoneMask) => {
  let errors = 0;
  const nameInput = form.querySelector('.name');
  const emailInput = form.querySelector('.email');
  const phoneInput = form.querySelector('.phone');
  const commentInput = form.querySelector('.comment');
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

export const formSend = (thisForm) => {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
}


