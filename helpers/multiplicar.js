const fs = require('fs')
const colors = require('colors')

const crearArchivo = async( base = 5, l = false, h = 10) =>{

    console.log(`=====Tabla del ${ base }=====`.green)

    let salida = '';

    for( let i = 1; i <= h; i++ ){

        salida += `${ i } ${'x'.red} ${ base } ${'='.blue} ${ i * base }\n`
    
    }

    if( l ){

        console.log( salida )

    }

    fs.writeFileSync( `./salida/tabla-${ base }.txt `, salida );

    return ` tabla-${ base }.txt `;

}

module.exports = {
    crearArchivo
}
