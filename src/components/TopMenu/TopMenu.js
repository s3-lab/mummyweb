import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import CategoriasMenu from "../CategoriasMenu";
import Carrito from "../Carrito";
import { ReactComponent as Logo } from "./../../assets/svg/mummy.svg";
import { ReactComponent as EmptyBag } from "./../../assets/svg/Carrito.svg";
import { ReactComponent as FullBag } from "./../../assets/svg/Cesta_llena.svg";

import CarModal from '../CarModal'

import "./TopMenu.scss";

function TopMenu({counter, productsCar, data, getProductsFromLocalStorage, history}) {
 
  const [carDisplay, setCarDisplay] = useState(false);
  const isBagFull = productsCar.length && true;

  const handleClick = ()=>{
    setCarDisplay(!carDisplay)
  }

  history.listen(() => {
    setCarDisplay(false)
  })


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
        <Carrito  Icon={isBagFull ? FullBag : EmptyBag}/>
        <span>{productsCar.length ? productsCar.length : null}</span>
      </div>
      <CarModal carDisplay={carDisplay} productsCar={productsCar} counter={counter} data={data} getProductsFromLocalStorage={getProductsFromLocalStorage}/>
    </header>
  );
}

export default withRouter(TopMenu)