//configurar parametros u argumentos directamente en la raiz, no hay un comando intermedio 

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



module.exports = {
    argv: argv
}