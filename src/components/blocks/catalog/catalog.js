import React from "react";
import { catalogList } from "../../../const";
import ProductCard from "../../ui/product-card/product-card";

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="catalog__wrapper">
        <h2 className="catalog__title">Каталог услуг</h2>
        <ul className="catalog__services-container">
          {catalogList.map((item) => <ProductCard key={catalogList.indexOf(item)} product={item}/>)}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
