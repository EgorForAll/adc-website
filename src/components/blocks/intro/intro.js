import React from "react"
import OrderButton from "../../hoc/order-button/order-button";
import IntroButton from "../../ui/intro-button/intro-button";

const Intro = () => {
  const OrderButtonIntro = OrderButton(IntroButton);

  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="title-container">
          <h1 className="intro__title">Жизнь на полной скорости</h1>
          <p className="intro__text">
            Больше 20 лет опыта в сфере обслуживания автомобилей, больше десяти тысяч довольных клиентов и больше миллиона километров покоренных трасс.
          </p>
        </div>
        <OrderButtonIntro />
      </div>
    </section>
  )
}

export default Intro;
