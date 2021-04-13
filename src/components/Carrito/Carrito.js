import React from "react";

import "./Carrito.scss";

export default function carrito({Icon}) {
  return (
      <div variant="link" className="car">
        <Icon className="car__icon" />
      </div>
  );
}
