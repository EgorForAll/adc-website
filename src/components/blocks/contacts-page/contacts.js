import React, { useEffect, useRef } from 'react';
import useScript from '../../../custom-hook/use-script';
import { urlMap } from '../../../const';
import { contactsList } from '../../../const';
import { observerOpacity } from '../../../utils';

const Contacts = () => {
  const mapRef = useRef();
  document.addEventListener('load', useScript(urlMap, mapRef));

  useEffect(() => {
    observerOpacity.observe(document.querySelector('.contacts-page__info'));
  }, []);

  return (
    <section className="contacts-page">
      <h2 className="contacts-page__title">Контактная информация</h2>
      <div className="contacts-page__wrapper">
        <div className="contacts-page__info">
          <div className="contacts-page__main-info">
            <span className="contacts-page__text">
              Адрес: Нижегородская область, Городецкий район, г. Заволжье, ул. Баумана 1а.
            </span>
            <span className="contacts-page__text">
              Контактные номера стола заказов:{' '}
              <a href="tel:+78316121737" aria-label="Телефон стола заказов">
                +7-831-612-17-37
              </a>
              ,{' '}
              <a href="tel:+78316121728" aria-label="Телефон стола заказов">
                +7-831-612-17-28
              </a>
              .
            </span>
            <span className="contacts-page__text">
              Электронная почта: <a href="mailto:zst_dir@mail.ru">zst_dir@mail.ru</a>.
            </span>
          </div>
          <ul className="contacts-page__personal">
            {contactsList.map((item) => (
              <li className="contacts-page__personal-item" key={contactsList.indexOf(item)}>
                <h3 className="contacts-page__personal-title">{item.name}</h3>
                <span className="contacts-page__personal-text">Должность: {item.position}</span>
                <span className="contacts-page__personal-text">
                  Телефон: <a href={`tel:${item.telephone}`}>{item.telephone}</a>
                </span>
                {item.email ? (
                  <span className="contacts-page__personal-text">
                    Email:{' '}
                    <a href={`mailto:${item.email}`} aria-label="Электронная почта компании">
                      zst_dir@mail.ru
                    </a>
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="contacts-page__map" ref={mapRef}></div>
      </div>
    </section>
  );
};

export default Contacts;
