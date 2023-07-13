import React from "react";
import OrderButton from "../../hoc/order-button/order-button";
import CatalogButton from "../catalog-button/catalog-button";

const ProductCard = ({product}) => {
  const OrderButtonCard = OrderButton(CatalogButton, product.name);
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
        <OrderButtonCard/>
      </div>
    </li>
  )
}

export default ProductCard;
