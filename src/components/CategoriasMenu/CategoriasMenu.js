import React, { useState } from "react"; 
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { ReactComponent as Hamburguer_icon} from "./../../assets/svg/Hamburguer_icon.svg";
import {ReactComponent as Close_icon} from "./../../assets/svg/Close.svg";


import "./CategoriasMenu.scss";

export default function CategoriasMenu(){
    const [menuOpen, setMenuOpen] = useState (false);
    const widhtMenuContent = menuOpen ? 340 : 0;

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <Button variant="link" className="hamburguer-icon">
                <Hamburguer_icon className="icon-h" onClick={openMenu}/>
            </Button>
            <div className="menu-content" style={{ width: widhtMenuContent}}>
                <Menu className="menu-items" defaultSelectedKeys= {["1"]}  >
                          <Menu.Item key="1">
                          <Link to="/home">RELOJS</Link>
                          </Menu.Item>
                          <Menu.Item key="2">
                           <Link to="/home">HOMEDECOR</Link>
                          </Menu.Item>
                          <Menu.Item  key="3">
                          <Link to="/home">LAPICERAS</Link>
                          </Menu.Item>
                         <Menu.Item className="about-alone" key="4" style={{ paddingTop: 8}}>
                         <Link to="/home">ABOUT</Link>
                      </Menu.Item>
                </Menu>
            <Button variant="link" className="close-icon">
                <Close_icon className="icon-close" onClick={closeMenu}/>
            </Button>
            </div>
        </>
    )
}