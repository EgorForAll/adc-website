import React, { useEffect, useRef } from "react";
import { catalogList } from "../../../const";
import { validateForm } from "../../../utils";

const ModalWindow = ({parent, root, service}) => {
  const selected = (item) => service === item.name ? 'selected' : null;
  const formRef = useRef();

  useEffect(() => {
    formRef.current.addEventListener('DOMContentLoaded', validateForm)
  })

  return (
    <div className="modal-window">
      <div className="modal-window__tab">
        <h3 className="modal-window__title">Заполните заявку</h3>
        <button className="modal-window__btn-close" onClick={() => root.removeChild(parent)}/>
      </div>
      <form action="#" className="modal-window__form" ref={formRef}>
        <label htmlFor="name" className="modal__window-subtitle">Имя:</label>
        <input id="name" className="modal-window__input name req" type="text"/>
        <label htmlFor="telephone" className="modal__window-subtitle">Телефон:</label>
        <input id="telephone" className="modal-window__input req" type="tel" required/>
        <label htmlFor="email" className="modal__window-subtitle">Email:</label>
        <input id="email" className="modal-window__input email req" type="email"/>
        <label className="modal__window-subtitle" htmlFor="type">Выберите услугу</label>
        <select defaultValue={service} className="modal-window__input" id="type">
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
        <label className="modal__window-subtitle">Комментарий</label>
        <textarea className="modal-window__input--textarea" />
        <button className="modal__window__button-submit" type="submit">Отправить заявку</button>
      </form>
    </div>
  );
};

export default ModalWindow;
