import React from "react";
import { Carousel } from "antd";
import HeroIMG from "../../assets/Hero.png";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="carousel">
      <div className="carousel-text">
        <h2>Buenos Aires Village</h2>
        <p>
          La ciudad tambien es tu hogar es el sinonimo de vivir en comunidad
        </p>
        <button>Descubre mas</button>
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
