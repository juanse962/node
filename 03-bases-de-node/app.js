const argv = require('yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = '5';

// console.log(process.argv);
let argv2 = process.argv;
console.log(argv);
console.log(argv2);
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

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));