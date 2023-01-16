"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
//valores opcionales
/**
 * @param name Nombre opcional
 */
function despedirPersona(arr) {
    if (arr) {
        console.log(`Adios ${arr} `);
    }
    else {
        console.log("Adios");
    }
}
let name = "Daniel";
saludar(estudiante);
despedirPersona();
function variosParams(nombre, apellido, edad = 19) {
}
let ejemploArrow = () => { console.log("Soy una funciona Flecha"); };
ejemploArrow();
//documentar Funciones
/**
 *
 * @param nombre
 * @param apellidos
 * @returns
 */
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Daniel", "lugo");
console.log(nombreCompleto);
console.log(typeof (nombreCompleto));
//factor de propagacion
function ejemploMultiParams(...nombres) {
}
let empleadoOffice = {
    nombre: "Martin",
    apellidos: "San Jose",
    edad: 40
};
//arrow functions
const showEmploye = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
console.log(showEmploye(empleadoOffice));
const datosEmpleado = (empleado) => {
    if (empleado.edad > 65) {
        return `Empleado ${empleado.nombre} está por jubilarse`;
    }
    else {
        return `Empleado ${empleado.nombre} le falta todavia por jubilarse`;
    }
};
const consultaJubilacion = datosEmpleado(empleadoOffice);
console.log(consultaJubilacion);
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 65) {
        return;
    }
    else {
        cobrar();
    }
};
const cobrarSalario = () => {
    console.log("Cobrar Nómina empleado - level 2");
};
console.log(cobrarSalario());
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        //await
        yield console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
        console.log("Completado");
        return "Complete";
    });
}
ejemploAsync()
    .then((res) => {
    console.log("respuesta", res);
})
    .catch((error) => {
    console.log(error, "error");
})
    .finally(() => console.log("todo ok"));
//generadoras
function ejemploGenerator() {
    //yield : sirve para emitir  un nuevo valor
}
//worker
function* watcher(valor) {
    yield valor;
    yield* worker(valor);
    yield valor + 4;
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
    yield valor + 4;
}
let generadorSaga = watcher(5);
console.log(generadorSaga.next().value);
// persistencia de datos
function mostrarError(error) {
    console.log("existe un error", error);
}
// localStorage => se guarda en el navegador (no se elimina los datos si se reinicia el navegador)
// sessionStorage (se guarda en el navegador)
// cookies funciona como el localStorage, tienen tiempo y un ambito (no guardar datos sensibles)
// funcion guardarEnLS(): void{
//     localStorage.set("nombre", )
// }
//cookies
/**
 *
 */
const cookieOptions = {
    name: "usuario",
    value: "value",
    expires: new Date(2099, 10, 1),
    path: "/"
};
// setear cookie
//setCookie(cookieOptions);
// //obtener cookies
// getCookieValue("usuario")
// //borrar cookie exacta
// deleteCookie("usuario");
// // borrar todos los cookies
// deleteAllCookies();
//clase Temporizador
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return;
            //cuando termine el tiempo se ejecuta
            this.terminar();
        }, 10000);
    }
}
const miTemporizador = new Temporizador();
//definir la funcion del callback a ejecutar
miTemporizador.terminar = () => {
    console.log("Hemos terminado la tarea de tiempo");
};
//lanzamos el temporizador
miTemporizador.empezar();
// setInterval(()=> console.log("tick"), 1000);
console.log("Clases y objetos");
