const axios = require('axios');

const gertLugarLatLng = async(direccion) => {
    let encode_url = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encode_url }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existen resultados para la ciudad ${ direccion }`);

    }

    let location = respuesta.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    gertLugarLatLng,
}