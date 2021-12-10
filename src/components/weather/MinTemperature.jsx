import {useState} from "react";
import { getWeather } from "../../services/weather";

function MinTemp() {
    
    const [minTemp, setMinTemp] = useState(0);
        
    getWeather().then(data => setMinTemp(data.minTemp));
    
     return (
        <span className="minTemp">
            {Math.round(minTemp)}ºC
        </span>
    );
}

export default MinTemp;