import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">Thiago</a>

            <ul className="permalink">
                <li><a href="#">Home</a></li>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#experience">Meus conhecimentos</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/thiago-henrique-dos-santos-araujo/" target="_blank"><BsLinkedin/></a>
                <a href="https://github.com/thiagohenrique23" target="_blank"><BsGithub/></a>
                <a href="https://www.instagram.com/th_king07/" target="_blank"><BsInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Thiago👑. Todos os direitos reservados.</small>
            </div>
        </footer>
    )
}

export default Footer