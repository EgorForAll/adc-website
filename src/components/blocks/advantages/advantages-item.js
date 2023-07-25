import React from 'react';

const AdvantagesItem = ({ item }) => {
  return (
    <li className="advantages__item">
      <span className="advantages__item-text">{item}</span>
    </li>
  );
};

export default AdvantagesItem;
