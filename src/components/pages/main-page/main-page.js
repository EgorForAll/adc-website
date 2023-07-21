import React, { Suspense } from 'react';
import LoaderApp from '../../ui/loaders/loader-app/loader-app';
const Header = React.lazy(() => import('../../layout/header/header'));
const Intro = React.lazy(() => import('../../blocks/intro/intro'));
const Description = React.lazy(() => import('../../blocks/description/description'));
const Adavantages = React.lazy(() => import('../../blocks/advantages/advantages'));
const Team = React.lazy(() => import('../../blocks/team/team'));
const Gallery = React.lazy(() => import('../../blocks/gallery/gallery'));
const Contacts = React.lazy(() => import('../../blocks/contacts/contacts'));
const Footer = React.lazy(() => import('../../layout/footer/footer'));

const MainPage = () => {
  return (
    <>
      <Suspense fallback={<LoaderApp />}>
        <Header />
        <Intro />
        <Description />
        <Adavantages />
        <Team />
        <Gallery />
        <Contacts />
        <Footer />
      </Suspense>
    </>
  );
};

export default MainPage;
