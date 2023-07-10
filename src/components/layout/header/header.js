import React, { useState } from "react";
import Logo from "../../../assets/img/logo-header.svg";
import LogoDesk from "../../../assets/img/logo-header-desktop.svg";

const Header = () => {
  const [isOpened, setStatus] = useState(false);

    return (
        <header className="page-header">
            <div className="header__wrapper">
                <div className="header__left">
                <a href="/" className="header__logo">
                    <picture>
                    <source media="(max-width: 1152px)" srcSet={Logo} />
                    <img height="50" className="header__img" src={LogoDesk} alt="Логотип" />
                    </picture>
                </a>
                <button className="header__button" onClick={() => setStatus(!isOpened)}></button>
                </div>
                <nav className="header__nav" style={{display: `${isOpened ? `flex` : 'none'}`}}>
                <a href="/" className="header__link--active">Главная</a>
                <a href="/" className="header__link">Каталог</a>
                <a href="/" className="header__link">Контакты</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
