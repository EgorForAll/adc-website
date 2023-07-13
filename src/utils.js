export const isMobileScreen = () => window.screen.width < 1152 ? true : false;

const emailCheck = (input) => /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(input.value) ;

const nameCheck = (input) => input.value.lenght <= 1 ? input.classList.add('error') : null;

const formValidate = (form) => {
  let errors = 0;
  let formReq = form.querySelectorAll('.req');
  console.log(formReq);

  for (let input of formReq) {
    if (input.classList.contain('name')) {
      nameCheck(input);
      errors++
    }

    if (input.classList.contain('email')) {
      if (emailCheck(input)) {
        input.classList.add('error');
        errors++
      }
    }
  }
  return errors
}

export const validateForm = () => {
  const form = document.querySelector('.modal-window__form');
  console.log(form)
  form.addEventListener('submit', formSend);

  async function formSend (evt) {
    evt.preventDefault();
    let errors = formValidate(form);

    if (errors === 0) {
      console.log('Ошибок нет')
    } else {
      alert('Заполните обязательные поля формы');
    }
  }
}
