import React from "react";
import Clock from "./Clock";
import Weather from "./weather/Weather";
import Today from "./Date";



function Header(){
    
    return (
        <header>
            <div>
            <h3> <Today /> </h3>
            <h1> <Clock /> </h1>
            </div>

            <Weather />
        </header>
    );
}

export default Header;
