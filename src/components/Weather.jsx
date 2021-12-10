import React, { useEffect} from "react";
import { getWeather } from "../services/weather";

function Weather() {
     //const [weather, setWeather] = useState();


     useEffect(() => {
         const weather = getWeather();

         JSON.stringify(weather);
         console.log(weather);
     })

     return (
        <div>
            <h1>Lisbon </h1> <h2> </h2> 
        </div>
     );
}

export default Weather;