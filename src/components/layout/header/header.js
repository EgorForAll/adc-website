import React from "react";

const Header = () => {
    return (
        <header class="page-header">
            <div class="header__wrapper">
                <div class="header__left">
                <a href="/" class="header__logo">
                    <picture>
                    <source media="(max-width: 1152px)" srcset=".assets/img/logo/logo-header.svg" />
                    <img height="50" class="header__img" src="./assets/img/logo/logo-header-desktop.svg" alt="Логотип" />
                    </picture>
                </a>
                <button class="header__button"></button>
                </div>
                <nav class="header__nav">
                <a href="/" class="header__link--active">Главная</a>
                <a href="/" class="header__link">Каталог</a>
                <a href="/" class="header__link">Контакты</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;