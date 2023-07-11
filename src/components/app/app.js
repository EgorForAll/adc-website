import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import CatalogPage from "../pages/catalog-page/catalog-page";

const App = () => {
  return (
    <Switch>
        <Route path="/catalog" component={CatalogPage} exact/>
        <Route path="/" component={MainPage} exact/>
    </Switch>
  )
}

export default App;
