import React from "react";
import "./portfolio.css"
import THIAGRO from "../../assets/5b0cb146d2485bd6569f3054acb8354c-silhueta-de-cabeca-de-boi.png"
import ZERO from "../../assets/C.C.-Code-Geass.png"
import POKE from "../../assets/kawax-pokeball-3097.png"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Meus trabalhos recentes</h5>
            <h2>Portfólio</h2>

            <div className="container portfolio__container">
                
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={THIAGRO} alt="" height="360px"/>    
                    </div>
                    <h3>Thiagro</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/thiagohenrique23/Thiagro" className="btn" target="_blank">Github</a>
                        <a href="https://imminent-burn.surge.sh" className="btn btn-primary" target="_blank">Demonstração</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={ZERO} alt="" height="360px"/>    
                    </div>
                    <h3>Zero List</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/thiagohenrique23/Zero-List" className="btn" target="_blank">Github</a>
                        <a href="https://questionable-owner.surge.sh/" className="btn btn-primary" target="_blank">Demonstração</a>
                    </div>    
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={POKE} alt="" height="360px" />    
                    </div>
                    <h3>Pokédex</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/thiagohenrique23/Pokedex" className="btn" target="_blank">Github</a>
                        <a href="https://github.com/thiagohenrique23/Pokedex" className="btn btn-primary" target="_blank">Demonstração</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Portfolio