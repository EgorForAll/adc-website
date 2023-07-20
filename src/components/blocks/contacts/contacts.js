import React, { useEffect } from 'react';
import { observerOpacity } from '../../../utils';

const Contacts = () => {
  useEffect(() => {
    observerOpacity.observe(document.querySelector('.contacts__container'));
  }, []);

  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h2 className="contacts__title">Как нас найти</h2>
        <div className="contacts__container">
          <div className="contacts__address">
            <h3 className="contacts__address-subtitle">Физический адрес</h3>
            <span className="contacts__address-text">
              Нижегородская область, Городецкий район, г. Заволжье, ул. Баумана, 1а
            </span>
            <h3 className="contacts__address-subtitle ">Tелефоны</h3>
            <div className="contacts__link-wrapper">
              <a className="contacts__link" href="tel:88316121737">
                <span className="contacts__address-text telephone">8-(831)-612-17-37</span>
              </a>
              <a className="contacts__link" href="tel:88316121728">
                <span className="contacts__address-text telephone">8-(831)-612-17-28</span>
              </a>
            </div>
            <h3 className="contacts__address-subtitle ">Время работы</h3>
            <span className="contacts__address-text">пн - пт 8:00 - 17:00</span>
          </div>
          <div className="contacts__map">
            <iframe
              title="Местоположение компании"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A918c38d381c35337998aac1e04dc9c7b0dbd42ca290acd629ba2bd55d2ab175a&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
