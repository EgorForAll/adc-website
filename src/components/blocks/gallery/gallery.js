import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { galleryList } from "../../../const";

const Gallery = () => {

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <h2 className="gallery__title">Галлерея</h2>
        <div className="gallery__container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            spaceBetween={50}
            effect={"coverflow"}
            pagination={true}
            navigation
            slidesPerView={1}
            >
            {galleryList.map((slide) => (
              <SwiperSlide key={slide.id}>
                <picture>
                  <source media="(max-width: 1152px)" srcSet={slide.url_mobile} width="320" height="155"/>
                  <img className="gallery__image" src={slide.url} alt={slide.alt} width="1240" height="600"/>
                </picture>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
