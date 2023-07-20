import React, { useEffect } from 'react';
import { contactsList } from '../../../const';
import { observerOpacity } from '../../../utils';

const Contacts = () => {
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
        <div className="contacts-page__map">
          <iframe
            title="Геолокация компании"
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=170996698827"
            width="100%"
            height="100%"
            frameBorder="0"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
