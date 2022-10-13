import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Experiece = () => {
    return (
        <section id="experience">
            <h5>Resumo de Habilidades</h5>
            <h2>Meus conhecimentos</h2>
            

            
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-end</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>HTML</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>CSS</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Javascript</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>React</h4>
                        </article>
                    </div>    
                </div>
                

                
                <div className="experience__backend">
                    <h3>Back-end</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Node JS</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>Typescript</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>MySQL</h4>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <h4>MongoDB</h4>
                        </article>
                    </div>    
                </div> 
            
            

            </div>
        </section>
    )
}

export default Experiece