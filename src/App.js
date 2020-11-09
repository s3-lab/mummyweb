import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import RedesSociales from "./components/RedesSociales";

// pages

import Home from "./pages/home";
import Error404 from "./pages/error404";
import Detalles from "./pages/detalles";

function App() {
  return (
    <Router>
      <TopMenu />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/detalles" exact={true}>
          <Detalles />
        </Route>
        <Route path="*" exact={true}>
          <Error404 />
        </Route>
      </Switch>
      <RedesSociales/>
      <Footer />
    </Router>
  );
}

export default App;
