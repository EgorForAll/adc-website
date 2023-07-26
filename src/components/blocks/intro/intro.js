import React, { useState } from 'react';
import OrderButton from '../../hoc/order-button/order-button';
import IntroButton from '../../ui/intro-button/intro-button';
import ModalWindow from '../modal-window/modal-window';
import LoaderModal from '../../ui/loaders/loader-modal/loader';
import { useEffect } from 'react';
import { observerSlide, observerOpacity } from '../../../utils';

const Intro = () => {
  const [isOpened, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const OrderButtonIntro = OrderButton(IntroButton, isOpened, setOpen);
  useEffect(() => {
    observerSlide.observe(document.querySelector('.title-container'));
    observerOpacity.observe(document.querySelector('.intro'));
  });

  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="title-container">
          <h1 className="intro__title">Жизнь на полной скорости</h1>
          <p className="intro__text">
            Больше 20 лет опыта в сфере обслуживания автомобилей, больше десяти тысяч довольных
            клиентов и больше миллиона километров покоренных трасс.
          </p>
        </div>
        <OrderButtonIntro />
      </div>
      {isOpened ? <ModalWindow setOpen={setOpen} setLoader={setLoader} /> : null}
      {loader ? <LoaderModal /> : null}
    </section>
  );
};

export default Intro;
