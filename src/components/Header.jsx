import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderRight from "./HeaderRight";

const Header=()=>{
    return(
        <header className="header">
        <Logo />
        <Navbar />
        <HeaderRight />
      </header>
    )
}

export default Header