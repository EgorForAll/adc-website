import React, { useEffect } from 'react';
import { teamList } from '../../../const';
import { observerSlide } from '../../../utils';

const Team = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.team__item');
    for (let item of items) {
      observerSlide.observe(item);
    }
  }, []);

  return (
    <section className="team">
      <div className="team__wrapper">
        <h2 className="team__title">Наша команда</h2>
        <ul className="team__list">
          {teamList.map((item) => (
            <li className="team__item" key={item.id}>
              <div className="team__avatar-wrapper">
                <img
                  className="team__item-avatar"
                  src={item.avatar}
                  alt={item.name}
                  width="125"
                  height="125"
                />
              </div>
              <span className="team__item-text1">{item.name}</span>
              <span className="team__item-text2">{item.position}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
