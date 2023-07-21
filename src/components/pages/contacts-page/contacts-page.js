import React, { Suspense } from 'react';
import LoaderApp from '../../ui/loaders/loader-app/loader-app';
const Header = React.lazy(() => import('../../layout/header/header'));
const Contacts = React.lazy(() => import('../../blocks/contacts-page/contacts'));
const Footer = React.lazy(() => import('../../layout/footer/footer'));

const ContactsPage = () => {
  return (
    <Suspense fallback={<LoaderApp />}>
      <Header />
      <Contacts />
      <Footer />
    </Suspense>
  );
};

export default ContactsPage;
