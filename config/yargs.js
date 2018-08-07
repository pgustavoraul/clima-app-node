const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para consultar el clima',
            demand: true
        }
    }).argv;

module.exports = {
    argv
}