import React from "react";
import { Carousel } from "antd";
import Product from "../Product";
import HeroIMG from "../../assets/mummyhero.jpg";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="carousel">
      <div className="carousel-text">
        <div>
          <h2>Buenos Aires Village</h2>
          <p>
            La ciudad tambien es tu hogar es el sinonimo de vivir en comunidad
          </p>
          <button>Descubre mas</button>
        </div>
      </div>
      <Carousel autoplay>
        <div>
          <img src={HeroIMG} />
        </div>
        <div>
          <img src={HeroIMG} />
        </div>
      </Carousel>
    </div>
  );
}
