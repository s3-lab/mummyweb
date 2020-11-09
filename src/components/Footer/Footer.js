import React from "react";
import { Link } from "react-router-dom";


import "./Footer.scss";



export default function Footer() {
  return (
    <footer className="footer">
      <div className="politicas">
      <h3>Politicas</h3>
          <ul>
              <li>
                  <Link to="./Terminos y condiciones">Terminos y condiciones</Link>
              </li>
              <li> 
                  <Link to="./Politicas de privacidad">Politicas de privacidad</Link>                  
              </li>
          </ul>
      </div>
      <div className="contact">
      <h3>Contact</h3>
        <ul>
          <li>
            <p>
            san jose 763 3D <br/> Buenos Aires, Argentina <br/>+541156058959 <br/> info@mummy.com.co
            </p>
          </li>
        </ul>
      </div>
            <div className="newsletter">
              <form action="./suscripcion/" method="post" target="_blank">
                  <h2>
                  Únete a nuestro newsletter
                  </h2>
                  <input type="email" name="name" />
                <button>SUSCRIBIRME</button>
              </form>
            </div>
    </footer>
  );
}
