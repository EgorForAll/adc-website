import React from "react";
import Header from "../layout/header/header";
import Intro from "../blocks/intro/intro";
import Description from "../blocks/description/description";
import Adavantages from "../blocks/advantages/advantages";
import Team from "../blocks/team/team";
import Gallery from "../blocks/gallery/gallery";
import Contacts from "../blocks/contacts/contacts";
import Footer from "../layout/footer/footer";

const MainPage = () => {
    return (
        <>
          <Header/>
          <Intro />
          <Description />
          <Adavantages />
          <Team/>
          <Gallery/>
          <Contacts />
          <Footer />
        </>
    )
}

export default MainPage;
