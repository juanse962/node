const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}
// let base = '5';

// console.log(process.argv);
let argv2 = process.argv;

// console.log('limite: ' + argv.limite);


// let parametro = argv[2];
// let base = parametro.split(`=`)[1];

// console.log(base);


// let data = '';

// for (let index = 1; index <= 10; index++) {
//     data += `${base} * ${index} = ${base*index} \n`;

// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo de la tabla del ${base} ha sido creado`);
// });