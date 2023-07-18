import React, { useEffect, useRef} from "react";
import { catalogList } from "../../../const";
import IMask from 'imask';
import {formValidate, loaderTemplate, overlayTemplate} from "../../../utils";

async function formSend(evt, form, phoneMask, modalWindow) {
  evt.preventDefault();
  let errors = formValidate(form, phoneMask);
  let formData = new FormData(form);
  if (errors === 0) {
    modalWindow.insertAdjacentHTML('afterbegin', loaderTemplate());
    modalWindow.insertAdjacentHTML('beforeend', overlayTemplate());
    let response = await fetch('mail.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      form.reset();
      const loader = modalWindow.querySelector('.loader');
      const overlay = modalWindow.querySelector('.overlay');
      modalWindow.removeChild(loader);
      modalWindow.removeChild(overlay);
      alert('Ваша заявка успешно доставлена. Наш менеджер свяжется с вами в ближайшее время');
  } else {
    alert('Заполинте обязательные поля')
  }
}}

const ModalWindow = ({parent, root, service}) => {
  const selected = (item) => service === item.name ? 'selected' : null;
  const formRef = useRef();
  const modalRef = useRef();
  const phoneRef = useRef();

  const deleteModal = () => {
    root.removeChild(parent);
  }

  useEffect(() => {
    const phoneMask = new IMask(phoneRef.current, {
      mask: "+{7}(000)000-00-00",
    });

    formRef.current.addEventListener('submit', (evt) => formSend(evt, formRef.current, phoneMask, modalRef.current));
  })

  return (
    <div className="modal-window" ref={modalRef}>
      <div className="modal-window__tab">
        <h3 className="modal-window__title">Заполните заявку</h3>
        <button className="modal-window__btn-close" onClick={() => deleteModal()}/>
      </div>
      <form action="mail.php" className="modal-window__form" ref={formRef} method="POST">
        <div className="modal-window__input-wrapper">
          <label htmlFor="name" className="modal__window-subtitle">Имя:</label>
          <input id="name" name="name" className="modal-window__input name" type="text"/>
        </div>
        <div className="modal-window__input-wrapper">
          <label htmlFor="telephone" className="modal__window-subtitle">Телефон:</label>
          <input id="telephone" name="telephone" className="modal-window__input phone" type="tel" ref={phoneRef}/>
        </div>
        <div className="modal-window__input-wrapper">
          <label htmlFor="email" className="modal__window-subtitle">Email:</label>
          <input id="email" name="email" className="modal-window__input email" type="email"/>
        </div>
        <div className="modal-window__input-wrapper">
          <label className="modal__window-subtitle" htmlFor="type">Выберите услугу</label>
          <select name="services" className="modal-window__input"  id="type">
            <option value={'defualt'}>-</option>
            {catalogList.map((item) =>
              <option
                key={catalogList.indexOf(item)}
                  value={item.name}
                    selected={selected(item)}
                    >
                      {item.name}
              </option>)}
        </select>
        </div>
        <div className="modal-window__time-wrapper">
          <label className="modal__window-subtitle date-subtitle" htmlFor="date">Выберите удобное для вас время</label>
          <div className="modal-window__time-input-wrapper">
            <input id="date" className="modal-window__input--date" name="day" type="date"/>
            <input className="modal-window__input" name="time" type="time"/>
          </div>
        </div>
        <div className="modal-window__checkbox-wrapper">
          <input id="checkbox" className="modal-window__input--checkbox" type="checkbox"/>
          <label htmlFor="checkbox" className="checkbox-label">Согласие на обработку персональных данных</label>
        </div>
        <button className="modal__window__button-submit" type="submit" >Отправить заявку</button>
      </form>
    </div>
  );
};

export default ModalWindow;
