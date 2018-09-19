const fs = require('fs');

let base = 5;
let data = '';

for (let index = 1; index <= 10; index++) {
    data += `${base} * ${index} = ${base*index} \n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo de la tabla del ${base} ha sido creado`);
});