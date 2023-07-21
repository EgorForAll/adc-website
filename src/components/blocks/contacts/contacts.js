import React, { useEffect, useRef } from 'react';
import useScript from '../../../custom-hook/use-script';
import { urlMap } from '../../../const';
import { observerOpacity } from '../../../utils';

const Contacts = () => {
  const mainMapRef = useRef();
  useScript(urlMap, mainMapRef);

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
          <div className="contacts__map" ref={mainMapRef}></div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
