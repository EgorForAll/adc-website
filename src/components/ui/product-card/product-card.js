import React from "react";

const ProductCard = ({product}) => {
  return (
    <li className="catalog__card">
      <div className="card__image-wrapper">
        <img src={product.image} alt="Изображение услуги" width="130px" height="130px" />
      </div>
      <h3 className="card__title">{product.name}</h3>
      <div className="card__description">
        <span className="card__description-text">{product.description}</span>
      </div>
      <div className="card__button-wrapper">
        <button className="card__button">Записаться на услугу</button>
      </div>
    </li>
  )
}

export default ProductCard;
