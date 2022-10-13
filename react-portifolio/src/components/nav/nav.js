import React, { useState } from "react";
import { BsBriefcaseFill, BsFillChatDotsFill, BsFillPersonFill, BsHouseFill, BsStack } from "react-icons/bs";
import "./nav.css"

const Nav = () => {

    const [activeNav, setActiveNav] = useState("#") 

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><BsHouseFill/></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BsFillPersonFill/></a>
            <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsBriefcaseFill/></a>
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><BsStack/></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BsFillChatDotsFill/></a>
        </nav>
    )
}

export default Nav