import React from "react";
import SVG from 'react-inlinesvg';
import Logo from "../../../assets/img/logo-header.svg";
import LogoDesk from "../../../assets/img/logo-header-desktop.svg";
import Vk from "../../../assets/img/vk.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a href="/" className="footer__link">
          <picture>
            <source media="(max-width: 1152px)" srcSet={Logo} />
            <img height="50" className="header__img" src={LogoDesk} alt="Логотип" />
          </picture>
        </a>
        <div className="footer__links">
          <span className="footer__text">Подписывайтесь на нас:</span>
          <a href="/">
            <SVG
              src={Vk}
            />
          </a>
        </div>
        <div className="footer__copyright-wrapper">
          <span className="footer__copyright">Все права защищены</span>
        </div>
      </div>
    </footer>

  );
};

export default Footer;