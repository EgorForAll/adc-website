import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Logo from '../../../assets/img/logo-header.svg';
import LogoDesk from '../../../assets/img/logo-header-desktop.svg';
import { isMobileScreen } from '../../../utils';

const Header = () => {
  const [isOpened, setStatus] = useState(false);
  const [isMobile, setScreen] = useState(false);

  useEffect(() => {
    isMobileScreen() ? setScreen(true) : setScreen(false);
  }, []);

  const isMainPage = useCallback(
    () => (window.location.pathname.length === 1 ? 'header__link--active' : 'header__link'),
    []
  );
  const isCatalogPage = useCallback(
    () =>
      window.location.pathname.includes('/catalog') ? ' header__link--active' : 'header__link',
    []
  );
  const isContactsPage = useCallback(
    () =>
      window.location.pathname.includes('/contacts') ? ' header__link--active' : 'header__link',
    []
  );

  const isDocsPage = useCallback(() =>
    window.location.pathname.includes('/documetns') ? ' header__link--active' : 'header__link'
  );

  return (
    <header className="page-header">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/" className="header__logo" aria-label="ссылка на главную страницу">
            <picture>
              <source media="(max-width: 1152px)" srcSet={Logo} height={20} width={100} />
              <img height="50" width="150" className="header__img" src={LogoDesk} alt="Логотип" />
            </picture>
          </Link>
          <button
            className="header__button"
            aria-label="Открыть меню сайта"
            onClick={() => setStatus(!isOpened)}></button>
        </div>
        <nav
          className="header__nav"
          style={{ display: `${isMobile && !isOpened ? `none` : 'flex'}` }}>
          <Link aria-label="ссылка на главную страницу" to="/" className={isMainPage()}>
            Главная
          </Link>
          <Link aria-label="ссылка на страницу каталога" to="/catalog" className={isCatalogPage()}>
            Услуги
          </Link>
          <Link
            aria-label="ссылка на страницу с контактами"
            to="/contacts"
            className={isContactsPage()}>
            Контакты
          </Link>
          <Link
            aria-label="ссылка на страницу с документами"
            to="/documents"
            className={isDocsPage()}>
            Документы
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
