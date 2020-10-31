import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./Hero.scss";

export default function Hero() {
    return (
        <Container className= "hero-container-grid">
            <div className="titulo">
                <h1>Buenos<br/>Aires<br/>Village
                    </h1>
            </div>
            <div className="parrafo">
            <p>La ciudad también es tu hogar <br/>
                es el sinonimo de vivir 
                en comunidad</p>
            </div>
            <>
            <Button className="button-prueba" >Descubre más</Button>
            </>
            <>
            <Button href="/detalles" className="button-añadiracesta">
                <h6>AÑADIR A CESTA</h6>
                </Button>
            </>
            <>
            <Button className="button-continuar">CONTINUAR</Button>
            </>
            <div className= "subtitulos">
                <h5>NUEVOS PRODUCTOS</h5>
            </div>
            <div className="container-info">INFO</div>
        </Container>

    );

}