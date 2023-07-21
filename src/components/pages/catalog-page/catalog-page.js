import React, { Suspense } from 'react';
import LoaderApp from '../../ui/loaders/loader-app/loader-app';
const Header = React.lazy(() => import('../../layout/header/header'));
const Catalog = React.lazy(() => import('../../blocks/catalog/catalog'));
const Footer = React.lazy(() => import('../../layout/footer/footer'));

const CatalogPage = () => {
  return (
    <Suspense fallback={<LoaderApp />}>
      <Header />
      <Catalog />
      <Footer />
    </Suspense>
  );
};

export default CatalogPage;
