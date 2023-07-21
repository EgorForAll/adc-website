import React from 'react';
import PropTypes from 'prop-types';

const IntroButton = ({ onClick }) => {
  return (
    <button
      className="intro__button"
      aria-label="Записаться на техобслуживание"
      onClick={() => onClick()}>
      Записаться на техобслуживание
    </button>
  );
};

export default IntroButton;

IntroButton.propTypes = {
  onClick: PropTypes.func
};
