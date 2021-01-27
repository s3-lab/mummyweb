import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
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
          <Link to="/storys">
              <button>
              Descubre más
              </button>
          </Link>
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
