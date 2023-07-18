import React from "react";

const CatalogButton = ({onClick}) => {
  return (
    <button className="card__button" onClick={() => onClick()}>Записаться на услугу</button>
  );
};

export default CatalogButton;
