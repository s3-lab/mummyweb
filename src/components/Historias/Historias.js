import React from "react";
import HistoriaIMG from "../../assets/historia.png";
import CampañaIMG from "../../assets/product/mummyplanter.jpg";

import "./Historias.scss";

export default function historias() {

    return (
                <>
                <div className="HistoriasChimbas">
                    <div className="HistoriasChimbas__imagen">
                        <img src={HistoriaIMG} />
                    </div>
                    <div className="HistoriasChimbas__contenido">
                        <h1>
                        Buenos Aires Village
                        </h1>
                        <p>
                        Salir y recorrer montserrat y san telmo es un placer, en especial a los atardeceres cuando las fachadas imponentes contrastan con los amarillos y rojos del atardecer, se puede ver el juego de sombras y luces con gran nitidez a su vez este recorrido nos cuenta sobre las personas que vivieron y las que ahora habitan estos lugares, interactuando y siendo parte del habitat ese lugar que todos compartimos como nuestro HOGAR. Algunos casas muestran su deterioro por el paso del tiempo y otras el cuidado que con gran esmero se han mantenido intactas son el contraste armonico por el cúal pensamos que poderse llevar una parte de este paisaje a su casa es recordar ese goce de vivir y ser parte de este hermoso paisaje.
                        </p>
                    </div>
            </div>
            <div className="Campaña">
                <div className="Campaña__contenido">
                <h2>Esta colección...</h2>
                <p>
                        Salir y recorrer montserrat y san telmo es un placer, en especial a los atardeceres cuando las fachadas imponentes contrastan con los amarillos y rojos del atardecer, se puede ver el juego de sombras y luces con gran nitidez a su vez este recorrido nos cuenta sobre las personas que vivieron y las que ahora habitan estos lugares, interactuando y siendo parte del habitat ese lugar que todos compartimos como nuestro HOGAR. Algunos casas muestran su deterioro por el paso del tiempo y otras el cuidado que con gran esmero se han mantenido intactas son el contraste armonico por el cúal pensamos que poderse llevar una parte de este paisaje a su casa es recordar ese goce de vivir y ser parte de este hermoso paisaje.
                        </p>
                </div>
                <div className="Campaña__imagen">
                <img src={CampañaIMG} />
                </div>
            </div>
            </>
    )
}