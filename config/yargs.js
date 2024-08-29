const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption : true,
        describe: 'Es la base de la tabla de multiplicar'

    })
    .check( ( argv, options) => {

        if (isNaN( argv.b )){
            throw 'La base debe ser un número'
        }

        return true;

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption : true,
        default: false,
        describe: 'Muestra la tabla en consola o no'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Número limite hasta el que quiero que llegue la tabla'
    })
        
    .argv; //Es lo último que se va a obtener

module.exports =  argv 