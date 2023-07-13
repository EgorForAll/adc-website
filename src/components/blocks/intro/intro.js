import React from "react"
import OrderButton from "../../ui/order-button/order-button";

const Intro = () => {

  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="title-container">
          <h1 className="intro__title">Жизнь на полной скорости</h1>
          <p className="intro__text">
            Больше 20 лет опыта в сфере обслуживания автомобилей, больше десяти тысяч довольных клиентов и больше сотни тысяч покоренных трасс.
          </p>
        </div>
        <OrderButton />
      </div>
    </section>
  )
}

export default Intro;
