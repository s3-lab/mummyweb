import React, {useState} from "react";
import { Link } from "react-router-dom";
import CategoriasMenu from "../CategoriasMenu";
import Carrito from "../Carrito";
import { ReactComponent as Logo } from "./../../assets/svg/mummy.svg";
import CarModal from '../CarModal'

import "./TopMenu.scss";

export default function TopMenu({counter, productsCar, data, getProductsFromLocalStorage}) {
 
  const [carDisplay, setCarDisplay] = useState(false);

  const handleClick = ()=>{
    setCarDisplay(!carDisplay)
  }

  return (
    <header className="header">
      <div>
        <CategoriasMenu />
      </div>
      <div className="header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__car" onClick={handleClick} >
        <Carrito />
        <span>{productsCar.length ? productsCar.length : null}</span>
      </div>
      <CarModal carDisplay={carDisplay} productsCar={productsCar} counter={counter} data={data} getProductsFromLocalStorage={getProductsFromLocalStorage}/>

    </header>
  );
}
