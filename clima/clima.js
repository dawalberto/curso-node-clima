const axios = require('axios');


const getClima = async (lat, lng) => {

    let latitud = encodeURI(lat);
    let longitud = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&units=metric&appid=192bc46055644376169ade5c8d426aeb`);

    if (resp.cod === 400) {
        throw new Error('Latitud o Longitud no encontrada');
    }

    return resp.data.main.temp;

}


module.exports = {
    getClima
}