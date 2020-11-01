import React from "react";

import CategoriasMenu from "../CategoriasMenu";
import Carrito from "../Carrito";
import { ReactComponent as Logo } from "./../../assets/svg/mummy.svg";

import "./TopMenu.scss";

export default function TopMenu() {
  return (
    <header className="header">
      <div>
        <CategoriasMenu />
      </div>
      <div className="header__logo">
        <Logo />
      </div>
      <div>
        <Carrito />
      </div>
    </header>
  );
}
