import React from "react";
import { contactsList } from "../../../const";
import map from "../../../assets/img/contacts-map.jpg";

const Contacts = () => {
  return (
    <section className="contacts-page">
      <h2 className="contacts-page__title">Контактная информация</h2>
      <div className="contacts-page__wrapper">
        <div className="contacts-page__main-info">
          <span className="contacts-page__text">Адрес: Нижегородская область, Городецкий район, г. Заволжье, ул. Баумана 1а.</span>
          <span className="contacts-page__text">Контактные номера стола заказов: <a href="tel:+78316121737">+7-831-612-17-37</a>, <a href="tel:+78316121728">+7-831-612-17-28</a>.</span>
          <span className="contacts-page__text">Электронная почта: <a href="mailto:zst_dir@mail.ru">zst_dir@mail.ru</a>.</span>
        </div>
        <ul className="contacts-page__personal">
          {contactsList.map((item) =>
            <li className="contacts-page__personal-item" key={contactsList.indexOf(item)}>
              <h3 className="contacts-page__personal-title">{item.name}</h3>
              <span className="contacts-page__personal-text">Должность: {item.position}</span>
              <span className="contacts-page__personal-text">Телефон: <a href={`tel:${item.telephone}`}>{item.telephone}</a></span>
              {item.email ?
                <span className="contacts-page__personal-text">Email: <a href={`mailto:${item.email}`}>zst_dir@mail.ru</a></span> :
                  null
              }
            </li>
          )}
        </ul>
        <div className="contacts-page__map">
          <img src={map} alt="Геолокация компании" width="100%" height="100%" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;