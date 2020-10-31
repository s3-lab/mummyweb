import React from "react";
import {Layout} from "antd";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TopMenu from "./components/TopMenu";

// pages 

import Home from "./pages/home";
import Error404 from "./pages/error404";
import Detalles from "./pages/detalles";

function App() {

  const {Header, Content} = Layout;

  return (
    <Layout>
      <Router>
            <div className="App">
              <TopMenu/>
            </div>
       <Content>
          <Switch>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
            <Route path="/detalles" exact={true}>
              <Detalles />
            </Route>
            <Route path="*" exact={true}>
              <Error404 />
            </Route>
         </Switch>
       </Content>
    </Router>
  </Layout>
  );
}


export default App;
