import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import RedesSociales from "./components/RedesSociales";

// pages

import Home from "./pages/home";
import Error404 from "./pages/error404";
import Detalles from "./pages/detalles";
import Checkout from "./pages/checkout";
import useFetch from './hooks/useFetch'

function App() {
  const data = useFetch('https://mummyserver.herokuapp.com/products')

  const [counter, setCounter] = useState(0);
  const [productsCar, setProductsCar] = useState([]);

  const getProductsFromLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem('PRODUCTS'))
    products ? setProductsCar(products) : setProductsCar([])
  }
  useEffect(()=>{
    getProductsFromLocalStorage()
  },[])

  const handleAdd = (data)=>{
    getProductsFromLocalStorage()
    const products = productsCar;
    products.push(data);
    setProductsCar(products);
    localStorage.setItem('PRODUCTS', JSON.stringify(productsCar));
    setCounter(counter + 1)

  }
  return (
    <Router >
      <TopMenu counter={counter} productsCar={productsCar} data={data} getProductsFromLocalStorage={getProductsFromLocalStorage}/>
      <Switch>
        <Route path="/" exact={true}>
          <Home  setCounter={setCounter} counter={counter} handleAdd={handleAdd} data={data}/>
        </Route>
        <Route path="/detalles" exact={true}>
          <Detalles />
        </Route>
        <Route path="/checkout" exact={true}>
          <Checkout productsCar={productsCar} data={data}/>
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
