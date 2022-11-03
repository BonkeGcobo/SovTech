import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles/header.css'

const Header = () => {
    let link = {
       textDecoration:'none',
      };
    const [showMobMenu, setMobMenu] = useState(false)

    const menuBarClicked = () => {
       
        setMobMenu(!showMobMenu);
    }

    return (
        <header className="header-container">
            <h1>
                Bonke
            </h1>
            <FontAwesomeIcon icon={faBars} onClick={() => menuBarClicked()} />
            <div className={showMobMenu?"mob-menu":"show"}>
              <FontAwesomeIcon icon={faXmark} style={{width:'100%'}} />
                <ul className="links">
                    <li className="link"><NavLink style={link} to="/">Home</NavLink></li>
                    <li className="link"><NavLink style={link} to="Projects">Projects</NavLink></li>
                    <li className="link"><NavLink style={link} to="Contact">Contact</NavLink></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;