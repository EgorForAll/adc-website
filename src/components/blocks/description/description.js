import React from "react";
import DescImg from "../../../assets/img/adc-main.jpg";

const Description = () => {
    return (
        <section className="page-description">
            <h2 className="visually-hidden">О нас</h2>
            <article className="description__wrapper">
                <div className="description__img-overlay">
                <figure>
                    <img width="500" height="300" className="description__img" src={DescImg} alt="Главный вход" />
                    <figcaption>Въезд в ремонтный бокс</figcaption>
                </figure>
                </div>
                <p className="description__text">
                Мы ООО “АДС” - автосервис в г. Заволжье. Специализируемся на комплексной диагностике и профессиональном ремонте  автобусов, грузовых и легковых автомобилей.
                Мы предлагаем спектр услуг, который может потребоваться любому авто (диагностика и ремонт двигателя, коробки передач, подвески, инжектора и электронных систем автомобиля, развал-схождение, замена масла и прочее). Просторное помещение площадью 5000 кв. м оснащено  оборудованием, позволяющим сокращать длительность ремонта, выполняя все операции максимально качественно и быстро.
                </p>
            </article>
        </section>
    );
};

export default Description;
