import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HamburguerIcon } from "./../../assets/svg/Hamburguer_icon.svg";
import { ReactComponent as CloseIcon } from "./../../assets/svg/Close.svg";

import "./CategoriasMenu.scss";

export default function CategoriasMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <div className="menu__svg" onClick={handleMenu}>
        <HamburguerIcon />
      </div>

      <nav className={menuOpen ? `menu__click open` : "menu__click close"}>
        <div className="menu__click-svg">
          <CloseIcon onClick={handleMenu} />
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
