const axios = require('axios')

const getClima = async(lat, lng) => {

    let keyOpenWeatherMap = 'bb5c394b642fed86e9e422ea372c83b7';
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${keyOpenWeatherMap}`)

    if (resp.data.main === 'undefined') {
        throw new Error(`No hay resultados del clima para latitud ${lat} y longitud ${lng}`)
    }

    return resp.data.main.temp;


}

module.exports = {
    getClima
}