import React from 'react';

const Docs = () => {
  return (
    <section className="docs-page">
      <h2 className="docs-page__title">Документы</h2>
      <div className="docs-wrapper">
        <div className="docs-content">
          <ul>
            <li className="docs-list">
              <a href="http://adc52.ru/assets/tech.jpeg" target="_blank">
                График работы техосмотра
              </a>
            </li>
            <li className="docs-list">
              <a href="http://adc52.ru/assets/tariffs.pdf" target="_blank">
                Тарифы на техосмотр
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Docs;
