console.log('Inicio de el programa');

setTimeout(function() {
    console.log('Primer Timeout');
}, 3000);

setTimeout(function() {
    console.log('Segundo Timeout');
}, 0);

setTimeout(function() {
    console.log('Tercero Timeout 3');
}, 0);

console.log('Fin de el programa');