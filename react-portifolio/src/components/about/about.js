import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png"
import { BsAwardFill, BsFillBarChartFill, BsGlobe } from "react-icons/bs";

const About = () => {
    return (
        <section id="about">
            
            <h5>Conheça</h5>
            <h2>Sobre mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"></img>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAwardFill className="about__icon"/>
                            <h5>Experiência</h5>
                            <small>1+ Trabalhando<br/>😪</small>
                        </article>
                        <article className="about__card">
                            <BsGlobe className="about__icon"/>
                            <h5>Serviços</h5>
                            <small>No mundo todo <br/>😎</small>
                        </article>
                        <article className="about__card">
                            <BsFillBarChartFill className="about__icon"/>
                            <h5>Projetos</h5>
                            <small>22+ Completos <br/>😯</small>
                        </article>
                    </div>
                    <p>
                    Programador com conhecimentos HTML, CSS, Javascript e etc. Cursando a graduação em Análise e Desenvolvimento de Sistemas,
                    por agora atuo como Analista de Sistemas na Empresa Vortion. Busco combinar o que aprendi estudando com o que aprendi no trabalho para criar código inovadores para todos clientes.

                    </p>
                    <a href="#contact" className="btn btn-primary">Converse comigo</a>    
                </div>
            </div>

        </section>
    )
}

export default About