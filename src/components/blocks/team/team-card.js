import React from 'react';

const TeamCard = ({ avatar, name, position }) => {
  return (
    <li className="team__item">
      <div className="team__avatar-wrapper">
        <img className="team__item-avatar" src={avatar} alt={name} width="125" height="125" />
      </div>
      <span className="team__item-text1">{name}</span>
      <span className="team__item-text2">{position}</span>
    </li>
  );
};

export default TeamCard;
