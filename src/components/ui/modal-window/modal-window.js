import React from "react";

const ModalWindow = ({parent, root}) => {

  return (
    <div className="modal-window">
      <div className="modal-window__tab">
        <h3 className="modal-window__title">Заполните заявку</h3>
        <button className="modal-window__btn-close" onClick={() => root.removeChild(parent)}/>
      </div>
      <form className="modal-window__form">
        <label htmlFor="name" className="modal__window-subtitle">Имя:</label>
        <input id="name" className="modal-window__input" type="text" required/>
        <label htmlFor="telephone" className="modal__window-subtitle">Телефон:</label>
        <input id="telephone" className="modal-window__input" type="tel" required/>
        <label htmlFor="email" className="modal__window-subtitle">Email:</label>
        <input id="email" className="modal-window__input" type="email"/>
        <label className="modal__window-subtitle" htmlFor="type">Выберите услугу</label>
        <select className="modal-window__input" id="type">
          <option>-</option>
          <option>Ремонт двигателя</option>
          <option>Ремонт МКПП</option>
          <option>Ремонт ходовой части</option>
          <option>Развал-схождение</option>
          <option>Обработка авто защитным составом</option>
          <option>Технический осмотр</option>
          <option>Шиномонтаж</option>
        </select>
        <label className="modal__window-subtitle">Комментарий</label>
        <textarea className="modal-window__input--textarea" />
        <button className="modal__window__button-submit">Отправить заявку</button>
      </form>
    </div>
  );
};

export default ModalWindow;
