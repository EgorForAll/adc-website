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
        <div className="contacts-page__top">
          <div className="contacts-page__info">
            <div className="contacts-page__main-info">
              <h3 className="contacts-page__req">Наши реквизиты</h3>
              <span className="contacts-page__text">
                <span className="text-underlined">Адрес почтовый/юридический:</span> г. Заволжье,
                ул. Баумана 1а, помещение 17, Городецкий район, Нижегородская область, 606524.
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">Телефоны:</span>{' '}
                <a href="tel:+78316121737" aria-label="Телефон стола заказов">
                  +7-(831)-612-17-37
                </a>
                ,{' '}
                <a href="tel:+78316121728" aria-label="Телефон стола заказов">
                  +7-(831)-612-17-28
                </a>
                ,{' '}
                <a href="tel:+78316121747" aria-label="Телефон стола заказов">
                  +7-(831)-612-17-47
                </a>
                .
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">Факс:</span> (831) 2-17-37, (831) 2-17-27
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">Email</span>:{' '}
                <a href="mailto:zst_dir@mail.ru">zst_dir@mail.ru</a>.
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">Расч/счет</span>: 40702810600000011819 Филиал
                "Центральный" Банка ВТБ (ПАО) г. Москва
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">Кор/счет</span>: 30101810145250000411
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">БИК</span>: 044525411
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">ИНН</span>: 5248041555
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">КПП</span>: 524801001
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">ОГРН</span>: 1175275049311
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">ОКПО</span>: 16219373
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">ОКВЭД</span>: 45.20
              </span>
              <span className="contacts-page__text">
                <span className="text-underlined">ОКАТО</span>: 22228503000
              </span>
              <span className="contacts-page__text">
                <a className="" href="http://adc52.ru/req.docx" target="_blank">
                  Скачать реквизиты
                </a>
              </span>
            </div>
          </div>
          <div className="contacts-page__map" ref={mapRef}></div>
        </div>
        <div className="contacts-page__bottom">
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
      </div>
    </section>
  );
};

export default Contacts;
