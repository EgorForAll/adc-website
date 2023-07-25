import React, { useEffect, lazy } from 'react';
import { teamList } from '../../../const';
import { observerOpacity } from '../../../utils';

const TeamCard = lazy(() => import('./team-card'));

const Team = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.team__item');
    for (let item of items) {
      observerOpacity.observe(item);
    }
  }, []);

  return (
    <section className="team">
      <div className="team__wrapper">
        <h2 className="team__title">Наша команда</h2>
        <ul className="team__list">
          {teamList.map((item) => (
            <TeamCard
              name={item.name}
              avatar={item.avatar}
              position={item.position}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
