const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!(Number(base))) {
            reject(`El valor introducido ${base} no es un numero`);
            return
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index} \n`;

        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}