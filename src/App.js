import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";

// pages

import Home from "./pages/home";
import Error404 from "./pages/error404";
import Detalles from "./pages/detalles";

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
      </div>

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
    </Router>
  );
}

export default App;
