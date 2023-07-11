import React from "react";
import { catalogList } from "../../../const";

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="catalog__wrapper">
        <h2 className="catalog__title">Каталог услуг</h2>
        <ul className="catalog__services-container">
          {catalogList.map((item) =>
            <li className="catalog__card" key={catalogList.indexOf(item)}>
              <div className="card__image-wrapper">
                <img src={item.image} alt="Изображение услуги" width="130px" height="130px" />
              </div>
              <h3 className="card__title">{item.name}</h3>
              <div className="card__description">
                <span className="card__description-text">{item.description}</span>
              </div>
              <div className="card__button-wrapper">
                <button className="card__button">Записаться на услугу</button>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
