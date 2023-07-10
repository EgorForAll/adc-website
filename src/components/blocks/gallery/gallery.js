import React from "react";
import Image from "../../../assets/img/gallery.jpg";
import Arrow from "../../../assets/img/arrow.svg";
import SVG from 'react-inlinesvg';

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <h2 className="gallery__title" style={{color: '#FBEFE5'}}>Галлерея</h2>
        <div className="gallery__container">
          <button className="toggle__button">
            <SVG
              src={Arrow}
            />
          </button>
          <img className="gallery__image" src={Image} alt="Изображение" />
          <button className="toggle__button--right">
            <SVG
              src={Arrow}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
