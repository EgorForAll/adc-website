import React from "react";

const IntroButton = ({onClick}) => {
  return (
    <button className="intro__button" onClick={() => onClick()}>Записаться на техобслуживание</button>
  )
}

export default IntroButton;
