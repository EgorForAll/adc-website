import React from 'react';
import PropTypes from 'prop-types';

const CatalogButton = ({ onClick }) => {
  return (
    <button className="card__button" aria-label="Записаться на услугу" onClick={() => onClick()}>
      Записаться на услугу
    </button>
  );
};

export default CatalogButton;

CatalogButton.propTypes = {
  onClick: PropTypes.func
};
