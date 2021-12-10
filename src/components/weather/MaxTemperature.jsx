import {useState} from "react";
import { getWeather } from "../../services/weather";

function MaxTemp() {
    
    const [maxTemp, setMaxTemp] = useState(0);
        
    getWeather().then(data => setMaxTemp(data.maxTemp));
    
    return (
        <span className="maxTemp">
            {Math.round(maxTemp)}ºC
        </span>
    );
}

export default MaxTemp;