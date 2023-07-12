import React from "react";
import { advantagesList } from "../../../const";

const Adavantages = () => {
    return (
        <section className="page-advantages">
            <div className="advatages-wrapper">
                <h2 className="advantages__title">Наши преимущества</h2>
                <ul className="advantages__list">
                    {advantagesList.map((item) =>               
                        <li className="advantages__item" key={advantagesList.indexOf(item)}>
                            <span className="advantages__item-text">{item}</span>
                        </li>)}
                </ul>
            </div>
        </section>
    );
};

export default Adavantages;