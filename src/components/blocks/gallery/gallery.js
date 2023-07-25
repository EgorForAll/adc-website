import React, { useEffect, lazy } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { galleryList } from '../../../const';
import { observerOpacity, preloadImages, createNewArray } from '../../../utils';
const SwiperImage = lazy(() => import('../../ui/swiper/swiper'));

const Gallery = () => {
  useEffect(() => {
    observerOpacity.observe(document.querySelector('.gallery__container'));
  });

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <h2 className="gallery__title">Галлерея автосервиса</h2>
        <div className="gallery__container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            spaceBetween={50}
            effect={'coverflow'}
            pagination={true}
            navigation
            slidesPerView={1}>
            {galleryList.map((slide) => (
              <SwiperSlide key={slide.id}>
                <SwiperImage url={slide.url} urlMobile={slide.url_mobile} alt={slide.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
