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

  useEffect(() => {
    console.log(window.location.pathname.slice(1));
  })

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
                <Link to="/" className="header__link--active">Главная</Link>
                <Link to="/catalog" className="header__link">Каталог</Link>
                <Link to="/contacts" className="header__link">Контакты</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
