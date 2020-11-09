import React from "react";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/svg/youtube.svg";
import { ReactComponent as Pinterest } from "../../assets/svg/pinterest.svg";


import "./RedesSociales.scss";

export default function RedesSociales() {

 return (
     <div className="redes">

         <div className="tittle-redes">
            <h2>Siguenos en</h2>
         </div>

         <div className="redes-links">
                <a href="" className="Facebook" target="blank" rel="noopener noreferrer">
                    < Facebook />
                </a>

                <a href="https://www.instagram.com/mummy.deco" className="Instagram" target="blank" rel="noopener noreferrer">
                    < Instagram />
                </a>

                <a href="" className="youtube" target="blank" rel="noopener noreferrer">
                    < Youtube />
                </a>

                <a href="" className="Pinterest" target="blank" rel="noopener noreferrer">
                    < Pinterest />
                </a>
        </div>
    </div>
 );

}
