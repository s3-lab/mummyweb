import React from "react";
import { Link } from "react-router-dom";
import {Container, Navbar, Nav } from "react-bootstrap";
import CategoriasMenu from "../CategoriasMenu";
import Carrito from "../Carrito";
import {ReactComponent as Logo } from "./../../assets/svg/mummy.svg";

import "./TopMenu.scss";

export default function TopMenu() {
    return (
        <Navbar className = "top-menu">
                    <Container className= "container-left">
                            <CategoriasMenu />
                        </Container>
            <Container className= "container-center">
            <BrandNav />
            </Container>
            <Container className= "container-right">
                <Carrito />
            </Container>
        </Navbar>
    );
}


function BrandNav() {
    return (
        <Navbar.Brand>
            <Logo />
        </Navbar.Brand>
    );
}




