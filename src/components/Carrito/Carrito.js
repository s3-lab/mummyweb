import React from "react";
import {Button} from "react-bootstrap";
import {ReactComponent as Carrito} from "./../../assets/svg/Carrito.svg";

import "./Carrito.scss"

export default function carrito() {

    return (
        <>
            <div>
            </div>
            <Button variant="link" className="Carrito">
                <Carrito className="icon-car"/>
            </Button>
        </>
    )

}