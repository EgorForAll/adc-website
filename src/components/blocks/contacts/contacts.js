import React, {useRef} from "react";
import useScript from "../../custom-hook/use-script/use-script";
import { urlMap } from "../../../const";

const Contacts = () => {
  const mainMapRef = useRef();
  useScript(urlMap, mainMapRef);
  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h2 className="contacts__title">Как нас найти</h2>
        <div className="contacts__container">
          <div className="contacts__address">
            <h3 className="contacts__company">ООО "АДС"</h3>
            <span className="contacts__address-text">
              Нижегородская область, Городецкий район, г. Заволжье, ул. Баумана 1а
            </span>
            <span className="contacts__telephone">ТЕЛ: 8-(831)-612-17-37</span>
            <span className="contacts__telephone">8-(831)-612-17-28</span>
            <span className="contacts__time-title">Время работы</span>
            <span className="contacts__time">пн - пт 8:00 - 17:00</span>
          </div>
          <div className="contacts__map" ref={mainMapRef}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
