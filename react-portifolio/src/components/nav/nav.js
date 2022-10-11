import React from "react";
import { BsBriefcaseFill, BsFillChatDotsFill, BsFillPersonFill, BsHouseFill, BsStack } from "react-icons/bs";
import "./nav.css"

const Nav = () => {
    return (
        <nav>
            <a href="#"><BsHouseFill/></a>
            <a href="#about"><BsFillPersonFill/></a>
            <a href="#experience"><BsBriefcaseFill/></a>
            <a href="#portfolio"><BsStack/></a>
            <a href="#contact"><BsFillChatDotsFill/></a>
        </nav>
    )
}

export default Nav