import React from 'react';
import SVG from 'react-inlinesvg';
import Logo from '../../../assets/img/logo-header.svg';
import LogoDesk from '../../../assets/img/logo-header-desktop.svg';
import Vk from '../../../assets/img/vk.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  const openLink = () => window.location.replace('https://vk.com/adc52');
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a
          href="https://vk.com/adc52"
          aria-label="Переход на главную страницу"
          className="footer__link"
          onClick={() => openLink()}>
          <picture>
            <source media="(max-width: 1152px)" srcSet={Logo} />
            <img height="50" width="150" className="header__img" src={LogoDesk} alt="Логотип" />
          </picture>
        </a>
        <div className="footer__links">
          <span className="footer__text">Подписывайтесь на нас:</span>
          <Link
            aria-label="Ссылка на наше сообщество Вконтакте"
            to={{ pathname: 'https://vk.com/adc52' }}
            target="_blank">
            <SVG src={Vk} />
          </Link>
        </div>
        <div className="footer__copyright-wrapper">
          <span className="footer__copyright">Все права защищены</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
