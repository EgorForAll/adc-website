import React from 'react';

const Docs = () => {
  return (
    <section className="docs-page">
      <h2 className="docs-page__title">Документы</h2>
      <div className="docs-wrapper">
        <div className="docs-content">
          <ul>
            <li className="docs-list">
              <a href="http://adc52.ru/docs/tech.jpeg" target="_blank">
                График работы техосмотра
              </a>
            </li>
            <li className="docs-list">
              <a href="http://adc52.ru/docs/tariffs.pdf" target="_blank">
                Тарифы на техосмотр
              </a>
            </li>
            <li className="docs-list">
              <a href="http://adc52.ru/docs/duty-benefits.pdf" target="_blank">
                Льготы при оплате госпошлины
              </a>
            </li>
            <li className="docs-list">
              <a href="http://adc52.ru/docs/duty-form.docx" target="_blank">
                Инструкция по внесению информации об оплате государственной пошлины при создании ДК
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Docs;
