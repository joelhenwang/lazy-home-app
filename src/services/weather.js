import axios from "axios";

export async function getWeather() {
    return await axios({
        "method": "GET",
        "url": "http://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=49ef69f7cc3ce0731bb37e97cc1f111c",
        "params": {
            "units": "metric",
        }
    }).then( response => {
        const weatherData = response.data;

        const weatherTemp = {
            "maxTemp": weatherData.main.temp_max, 
            "minTemp": weatherData.main.temp_min
        };

        return weatherTemp;
    }).catch(error => {
        console.log(error);
    });
}

