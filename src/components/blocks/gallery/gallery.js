import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { galleryList } from "../../../const";

const Gallery = () => {

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <h2 className="gallery__title" style={{color: '#FBEFE5'}}>Галлерея</h2>
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
              <SwiperSlide key={galleryList.indexOf(slide)}>
                <img src={slide} alt={"Изображение"} width="1240" height="600px"/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
