import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HamburguerIcon } from "./../../assets/svg/Hamburguer_icon.svg";
import { ReactComponent as CloseIcon } from "./../../assets/svg/Close.svg";

import "./CategoriasMenu.scss";

export default function CategoriasMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="menu">
        <div className="menu__svg" onMouseOver={() => setMenuOpen(true)}>
          <HamburguerIcon />
        </div>
        
        <nav
          className={menuOpen ? `menu__click open` : "menu__click close"}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className="menu__click-svg">
            <CloseIcon onClick={() => setMenuOpen(false)} />
          </div>

          <div className="menu__click-list">
            <ul>
              <li>
                <Link to="/relojs">RELOJS</Link>
              </li>
              <li>
                <Link to="/homedeco">HOMEDECO</Link>
              </li>
              <li>
                <Link to="/lapiceras">LAPICERAS</Link>
              </li>
              <li>
                <Link to="/abour">ABOUT</Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
}
