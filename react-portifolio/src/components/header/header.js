import React from "react";
import CTA from "./cta";
import "./header.css";
import ME from "../../assets/me.png"
import HeaderSocials from "./headerSocials";

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <h5>Olá, eu sou</h5>
                <h1>Thiago Henrique</h1>
                <h5 className="text-ligth">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt=""/>    
                </div>

                <a href="#contact" className="scroll__down">Deslocar para baixo</a>
            </div>
        </header>
    )
}

export default Header