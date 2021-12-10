import React from "react";
import Clock from "./Clock";
import Weather from "./Weather";



function Header(){
    
    return (
        <header>
            <h1>
                <Clock />
            </h1>
            <Weather />
        </header>
    );
}

export default Header;
