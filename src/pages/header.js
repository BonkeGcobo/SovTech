import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from '../image/ham.svg'
import image from '../image/xmark-solid.svg'
import './styles/header.css'


const Header = () => {
    let link = {
        textDecoration: 'none',
    };
    const [showMobMenu, setMobMenu] = useState(false)

    const menuBarClicked = () => {

        setMobMenu(!showMobMenu);
    }

    return (
        <>
            <header className="header-container">
                <h1 className="title">
                    Bonke
                </h1>
                <img className="menubar" src={menu} onClick={()=>menuBarClicked()} alt="menuBar"/>
                <ul className="desk-links">
                    <li className="link"><NavLink style={link}  to="/">Home</NavLink></li>
                    <li className="link"><NavLink style={link}  to="Projects">Projects</NavLink></li>
                    <li className="link"><NavLink style={link}  to="Contact">Contact</NavLink></li>
                </ul>
            </header>
            <div className={showMobMenu ? "show" : "mob-menu"}>
            
                <ul className="links">
                    <li className="link"><NavLink style={link} onClick={()=>menuBarClicked()} to="/">Home</NavLink></li>
                    <li className="link"><NavLink style={link} onClick={()=>menuBarClicked()} to="Projects">Projects</NavLink></li>
                    <li className="link"><NavLink style={link} onClick={()=>menuBarClicked()} to="Contact">Contact</NavLink></li>
                </ul>
                <div className="close-Tag">
                    <img className="cancel_btn" src={image} alt="closing button" onClick={()=>menuBarClicked()} />
                </div>
            </div>
        </>
    )
}
export default Header;