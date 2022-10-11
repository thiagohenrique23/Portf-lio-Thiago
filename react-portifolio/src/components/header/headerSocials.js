import React from "react";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import "./header.css";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/thiago-henrique-dos-santos-araujo/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/thiagohenrique23" target="_blank"><BsGithub/></a>
            <a href="https://www.instagram.com/th_king07/" target="_blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials