// function sumar(a, b) {
//     return a + b;
// }

// let sumar = (a, b) => a + b;

// let saludar = () => 'Hola mundo';

// console.log(saludar());

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// let saludar = (nombre) => `Hola ${nombre}`;

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',

    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());