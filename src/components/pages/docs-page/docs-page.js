import React, { Suspense } from 'react';
import LoaderApp from '../../ui/loaders/loader-app/loader-app';
const Header = React.lazy(() => import('../../layout/header/header'));
const Docs = React.lazy(() => import('../../blocks/docs-page/docs-page'));
const Footer = React.lazy(() => import('../../layout/footer/footer'));

const DocsPage = () => {
  return (
    <Suspense fallback={<LoaderApp />}>
      <Header />
      <Docs />
      <Footer />
    </Suspense>
  );
};

export default DocsPage;
