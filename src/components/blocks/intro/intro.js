import React from "react"
import IntroButton from "../../ui/intro-button/intro-button";
import { isMobileScreen } from "../../../utils";

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
        <IntroButton />
      </div>
    </section>
  )
}

export default Intro;
