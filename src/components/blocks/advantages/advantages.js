import React, { useEffect, lazy } from 'react';
import { advantagesList } from '../../../const';
import { observerOpacity } from '../../../utils';

const AdvantagesItem = lazy(() => import('./advantages-item'));

const Adavantages = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.advantages__item');
    for (let item of items) {
      observerOpacity.observe(item);
    }
  });

  return (
    <section className="page-advantages">
      <div className="advatages-wrapper">
        <h2 className="advantages__title">Наши преимущества</h2>
        <ul className="advantages__list">
          {advantagesList.map((item) => (
            <AdvantagesItem key={advantagesList.indexOf(item)} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Adavantages;
