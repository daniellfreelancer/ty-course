"use strict";
console.log("Hola TypeScript Im Daniel ");
//Declaracion de variables:
let nombre = 'Daniel';
let edad = 37;
let lluvia = true;
console.log(nombre);
console.log("Hola, ", nombre, "!");
console.log(`Hola ${nombre} que tal?`);
const PI = 3.1419;
console.log(PI * edad);
//tipar siempre las variables:
//any
//string
//number
let a, b, c; // instanciar 3 variables sin valor inicial
a = "Typescript";
b = false;
c = 5;
//builtIn types : number, string, boolean, void, null, undefined
let listaTareas = ["Hola", "Chao"];
let valores = [false, "Hola", 1950, true, "Chao"];
//enumerados
var Estados;
(function (Estados) {
    Estados[Estados["Completado"] = 0] = "Completado";
    Estados[Estados["incompleto"] = 1] = "incompleto";
    Estados[Estados["pendiente"] = 2] = "pendiente";
})(Estados || (Estados = {}));
;
var Puesto;
(function (Puesto) {
    Puesto[Puesto["Primero"] = 1] = "Primero";
    Puesto[Puesto["Segundo"] = 2] = "Segundo";
    Puesto[Puesto["Tercero"] = 3] = "Tercero";
})(Puesto || (Puesto = {}));
;
let estadoPuesto = Puesto.Primero;
let estadoTarea;
// podemos crear variables que sigan la interface
let Tarea1 = {
    nombre: "Tarea uno",
    estado: Estados.pendiente,
    importancia: 10,
    lugar: Puesto.Segundo
};
let coche = {
    nombre: "Mercedes",
    precio: 250000,
    year: 2010
};
console.log(coche);
let error = false;
//condicionales
if (coche.year > 2010) {
    console.log("Es viejito");
}
else if (coche.year === 2010) {
    console.log("Es del 2010");
}
else {
    console.log("Es nuevo, pero no tanto");
}
//Switch
switch (Tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada");
        break;
    case Estados.incompleto:
        console.log("La tarea no está completada");
        break;
    case Estados.pendiente:
        console.log("La tarea está pendiente");
        break;
    default:
        break;
}
// bucles
let listaNuevaTareas = [
    {
        nombre: "Tarea1",
        estado: Estados.Completado,
        importancia: 5,
        lugar: Puesto.Primero
    },
    {
        nombre: "Tarea2",
        estado: Estados.Completado,
        importancia: 10,
        lugar: Puesto.Segundo
    },
    {
        nombre: "Tarea3",
        estado: Estados.Completado,
        importancia: 15,
        lugar: Puesto.Tercero
    }
];
listaNuevaTareas.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
//while
while (Tarea1.estado !== Estados.Completado) {
    if (Tarea1.importancia === 20) {
        Tarea1.estado = Estados.Completado;
        console.log(Tarea1.estado);
        console.log("La tarea está completa");
        break;
    }
    else {
        console.log(Tarea1.importancia++);
        console.log("La tarea está incompleta");
    }
}
// asignacion multiple de variales
let miTarea = {
    nombreTarea: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
};
let { nombreTarea, estado, urgencia } = miTarea;
console.log(nombreTarea);
//spreadOperator
let listaCompraLunes = ["Leche", "huevos"];
let listaComprasMartes = [...listaCompraLunes, "pan", "Frutas"];
let listaCompraSemana = [...listaCompraLunes, ...listaComprasMartes];
console.log(listaCompraSemana);
// Funciones
/**
 * Funcion que muestra un saludo por consola
 * @param estudiante Nombre de la persona a saludar
 */
let estudiante = "Sofia";
function saludar(arr) {
    console.log(`Hola ${arr} buenos dias`);
}
saludar(estudiante);
