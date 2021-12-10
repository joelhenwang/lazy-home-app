import React, { useEffect, useState} from "react";
import { getWeather } from "../../services/weather";
import MaxTemp from "./MaxTemperature";
import MinTemp from "./MinTemperature";

function Weather() {
    


     return (
        <div>
            <h1>Lisboa</h1> 
            <h2>{MinTemp()} - {MaxTemp()}</h2> 
        </div>
     );
}

export default Weather;