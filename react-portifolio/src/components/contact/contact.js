import React, { useRef } from 'react';
import { BsEnvelopeFill, BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ruj3qne', 'template_drxhygb', form.current, 'Isi3EF977PxHp0c3m')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

    return (
        <section id="contact">
            <h5>Entre em contato</h5>
            <h2>Contate-me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <BsEnvelopeFill className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>thiagohenrique2309@gmail.com</h5>
                        <a href="mailto:thiagohenrique2309@gmail.com" target="_blank">Envie uma mensagem</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+55 (65) 9 9253-9584</h5>
                        <a href="https://api.whatsapp.com/send?phone=5565992539584" target="_blank">Envie uma mensagem</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Nome completo" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea name="message" rows="7" placeholder="Mensagem" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact