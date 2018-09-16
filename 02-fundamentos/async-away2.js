let empleados = [{
    id: 1,
    nombre: 'Juan'

}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Fernando'
}];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con ese id: ${id}`);
    } else {
        return empleadoDB;
    }
}
let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encuentra el salario de el empleado: ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);

    return `El empleado ${respuesta.nombre}  tiene un salario de: ${respuesta.salario}`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));