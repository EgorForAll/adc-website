import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Logo from "../../../assets/img/logo-header.svg";
import LogoDesk from "../../../assets/img/logo-header-desktop.svg";
import { isMobileScreen } from "../../../utils";

const Header = () => {
  const [isOpened, setStatus] = useState(false);
  const [isMobile, setScreen] = useState(false);

  useEffect(() => {
    isMobileScreen() ? setScreen(true) :setScreen(false);
  })

  const isMainPage = () => window.location.pathname.length === 1 ? 'header__link--active' : 'header__link';
  const isCatalogPage = () => window.location.pathname.includes('/catalog') ?' header__link--active' : 'header__link';
  const isContactsPage = () => window.location.pathname.includes('/contacts') ?' header__link--active' : 'header__link';

    return (
        <header className="page-header">
            <div className="header__wrapper">
                <div className="header__left">
                <Link to="/" className="header__logo">
                    <picture>
                    <source media="(max-width: 1152px)" srcSet={Logo} />
                    <img height="50" className="header__img" src={LogoDesk} alt="Логотип" />
                    </picture>
                </Link>
                <button className="header__button" onClick={() => setStatus(!isOpened)}></button>
                </div>
                <nav className="header__nav" style={{display: `${isMobile && !isOpened ? `none` : 'flex'}`}}>
                <Link to="/" className={isMainPage()}>Главная</Link>
                <Link to="/catalog" className={isCatalogPage()}>Каталог</Link>
                <Link to="/contacts" className={isContactsPage()}>Контакты</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;