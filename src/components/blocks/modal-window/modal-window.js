import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { catalogList } from '../../../const';
import { formValidate } from '../../../utils';
import { useDispatch } from 'react-redux';
import { selectService } from '../../../store/actions';

async function formSend(
  evt,
  form,
  modalWindow,
  setLoader,
  setSuccessMsg,
  setErrorMsg,
  successMsg,
  errorMsg
) {
  evt.preventDefault();
  successMsg ? setSuccessMsg(false) : null;
  errorMsg ? setErrorMsg(false) : null;
  let errors = formValidate(form);
  let formData = new FormData(form);
  const inputs = modalWindow.querySelectorAll('.modal-window__input');
  if (errors === 0) {
    modalWindow.querySelector('.modal__window__button-submit').disabled = true;
    modalWindow.classList.add('modal-overlay');
    for (let input of inputs) {
      input.classList.add('input-overlay');
      input.disabled = true;
    }
    setLoader(true);
    let response = await fetch('mail.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      form.reset();
      setLoader(false);
      modalWindow.querySelector('.modal__window__button-submit').disabled = false;
      modalWindow.classList.remove('modal-overlay');
      for (let input of inputs) {
        input.classList.remove('input-overlay');
        input.disabled = false;
      }
      const errorInputs = modalWindow.querySelectorAll('.error');
      if (errorInputs) {
        for (let input of errorInputs) {
          input.classList.remove('error');
        }
      }
      successMsg ? null : setSuccessMsg(true);
    } else {
      alert('Не удается установить соединение. Поробуйте еще раз');
    }
  } else {
    !errorMsg ? setErrorMsg(true) : null;
  }
}

const ModalWindow = ({ setOpen, setLoader, service }) => {
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const formRef = useRef();
  const modalRef = useRef();
  const phoneRef = useRef();
  const dispatch = useDispatch();
  const onSelectService = (service) => dispatch(selectService(service));
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  useEffect(() => {
    formRef.current.addEventListener('submit', (evt) =>
      formSend(
        evt,
        formRef.current,
        modalRef.current,
        setLoader,
        setSuccessMsg,
        setErrorMsg,
        successMsg,
        errorMsg
      )
    );
  });

  const closeModal = () => {
    document.querySelector('.overlay').classList.add('opacity-overlay');
    modalRef.current.classList.add('modal-up');
    errorMsg ? setErrorMsg(false) : null;
    successMsg ? setSuccessMsg(false) : null;
    setTimeout(() => setOpen(false), 1000);
  };

  return (
    <>
      <div className="overlay" onClick={() => closeModal()}>
        <div className="modal-window" ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <div className="modal-window__tab">
            <h3 className="modal-window__title">Заполните заявку</h3>
            <button className="modal-window__btn-close" onClick={() => closeModal()} />
          </div>
          <form action="mail.php" className="modal-window__form" ref={formRef} method="POST">
            <div className="modal-window__input-wrapper">
              <label htmlFor="name" className="modal__window-subtitle">
                Имя:
              </label>
              <input id="name" name="name" className="modal-window__input name" type="text" />
            </div>
            <div className="modal-window__input-wrapper">
              <label htmlFor="telephone" className="modal__window-subtitle">
                Телефон:
              </label>
              <input
                id="telephone"
                placeholder="+7-(000)-000-00-00"
                name="telephone"
                className="modal-window__input phone"
                type="tel"
                ref={phoneRef}
              />
            </div>
            <div className="modal-window__input-wrapper">
              <label htmlFor="email" className="modal__window-subtitle">
                Email:
              </label>
              <input id="email" name="email" className="modal-window__input email" type="email" />
            </div>
            <div className="modal-window__input-wrapper">
              <label className="modal__window-subtitle" htmlFor="type">
                Выберите услугу
              </label>
              <select
                defaultValue={service}
                name="services"
                className="modal-window__input"
                id="type">
                <option>-</option>
                {catalogList.map((item) => (
                  <option
                    key={catalogList.indexOf(item)}
                    value={item.name}
                    onClick={() => onSelectService(item.name)}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-window__time-wrapper">
              <label className="modal__window-subtitle date-subtitle" htmlFor="date">
                Выберите удобное для вас время
              </label>
              <div className="modal-window__time-input-wrapper">
                <input
                  id="date"
                  className="modal-window__input"
                  min={`${year}-${month > 10 ? month : `0${month}`}-${day}`}
                  name="day"
                  type="date"
                />
                <input id="time" className="modal-window__input" name="time" type="time" />
              </div>
            </div>
            <div className="modal-window__checkbox-wrapper">
              <input
                id="checkbox"
                className="modal-window__input modal-window__input--checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox" className="checkbox-label">
                Согласие на обработку персональных данных
              </label>
            </div>
            <button
              className="modal__window__button-submit"
              type="submit"
              aria-label="Отпправить заявку">
              Отправить заявку
            </button>
          </form>
          {successMsg ? (
            <span className="success-message">
              Ваша заявка успешно доставлена. Наш менеджер свяжется с вами в ближайшее время
            </span>
          ) : null}
          {errorMsg ? (
            <span className="error-message">
              Правильно заполните обязательные поля формы и повторите попытку
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ModalWindow;

ModalWindow.propTypes = {
  service: PropTypes.string,
  setOpen: PropTypes.func,
  setLoader: PropTypes.func
};
