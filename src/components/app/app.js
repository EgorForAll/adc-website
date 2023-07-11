import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import CatalogPage from "../pages/catalog-page/catalog-page";
import ContactsPage from "../pages/contacts-page/contacts-page";

const App = () => {
  return (
    <Switch>
        <Route path="/catalog" component={CatalogPage} exact/>
        <Route path="/contacts" component={ContactsPage} exact/>
        <Route path="/" component={MainPage} exact/>
    </Switch>
  )
}

export default App;
