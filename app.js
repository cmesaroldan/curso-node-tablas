
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors')


console.clear();

console.log(argv)


crearArchivo( argv.base, argv.listar, argv.hasta ).then(response => console.log(response.rainbow));

console.log(argv)