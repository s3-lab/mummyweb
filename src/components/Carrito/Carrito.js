import React from "react";
import { ReactComponent as Carrito } from "./../../assets/svg/Carrito.svg";

import "./Carrito.scss";

export default function carrito() {
  return (
    <>
      <div variant="link" className="car">
        <Carrito className="car__icon" />
      </div>
    </>
  );
}
