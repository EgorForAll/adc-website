import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Arrow from "../../../assets/img/arrow.svg";
import SVG from 'react-inlinesvg';
import 'swiper/css';
import { galleryList } from "../../../const";

const Gallery = () => {
  const [image, setImage] = useState(0);
  const decImg = () => image === 0 ? setImage(0) : setImage(image - 1);
  const incImg = () => image === (galleryList.length - 1) ? setImage(galleryList.length - 1)  : setImage(image + 1);
  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <h2 className="gallery__title" style={{color: '#FBEFE5'}}>Галлерея</h2>
        <div className="gallery__container">
          <button className="toggle__button" onClick={() => decImg()}>
            <SVG
              src={Arrow}
            />
          </button>
          <div className="gallery__image-wrapper">
            <img className="gallery__image" src={galleryList[image]} alt="Изображение" />
          </div>
          <button className="toggle__button--right"  onClick={() => incImg()}>
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
