const axios = require('axios');

const getClima = async(lat, lng) => {
    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=imperial&appid=b79b6a5c339547be3e91d3185ef2b260`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}