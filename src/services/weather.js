import axios from "axios";

export async function getWeather() {
    return await axios({
        "method": "GET",
        "url": "http://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=49ef69f7cc3ce0731bb37e97cc1f111c"
    }).then( response => {
        return response.data
    }).catch(error => {
        console.log(error);
    });
}