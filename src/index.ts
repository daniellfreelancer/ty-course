import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';

console.log("Hola TypeScript Im Daniel ");

//Declaracion de variables:
let nombre: string = 'Daniel';
let edad: number = 37;
let lluvia: boolean = true


console.log(nombre);
console.log("Hola, ", nombre, "!");
console.log(`Hola ${nombre} que tal?`);

const PI = 3.1419;

console.log(PI * edad);

//tipar siempre las variables:
//any
//string
//number

let a: string, b: boolean, c: number; // instanciar 3 variables sin valor inicial

a = "Typescript";
b = false;
c = 5;

//builtIn types : number, string, boolean, void, null, undefined


let listaTareas: string[] = ["Hola", "Chao"];

let valores: (string | number | boolean)[] = [false, "Hola", 1950, true, "Chao"]

//enumerados
enum Estados {
    "Completado",
    "incompleto",
    "pendiente"
};

enum Puesto {
    "Primero" = 1,
    "Segundo",
    "Tercero"
};



let estadoPuesto: Puesto = Puesto.Primero;
let estadoTarea: Estados.Completado;

//interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    importancia: number,
    lugar: Puesto
}



// podemos crear variables que sigan la interface

let Tarea1: Tarea = {
    nombre: "Tarea uno",
    estado: Estados.pendiente,
    importancia: 10,
    lugar: Puesto.Segundo
}


// crear tipos propios de typescript
type Producto = {
    precio: number,
    nombre: string,
    year: number
}

let coche: Producto = {
    nombre: "Mercedes",
    precio: 250000,
    year: 2010
}

console.log(coche)

let error: boolean = false;

//condicionales
if (coche.year > 2010) {
    console.log("Es viejito")
} else if (coche.year === 2010) {
    console.log("Es del 2010")
} else {
    console.log("Es nuevo, pero no tanto")
}
//Switch

switch (Tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea está completada")
        break;
    case Estados.incompleto:
    console.log("La tarea no está completada")
        break;    
        case Estados.pendiente:
            console.log("La tarea está pendiente")
                break;  
    default:
        break;
}


// bucles

let listaNuevaTareas : Tarea[] =[
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
]

listaNuevaTareas.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`)
        } 
);


//while

while (Tarea1.estado !== Estados.Completado){
    
    

    if(Tarea1.importancia === 20){
        Tarea1.estado = Estados.Completado
        console.log(Tarea1.estado)
        console.log("La tarea está completa")
        break
    } else {
        console.log(Tarea1.importancia++)
        console.log("La tarea está incompleta")
    }

}


// asignacion multiple de variales
let miTarea = {
    nombreTarea: "Mi tarea",
    estado: Estados.Completado,
    urgencia: 1
}

let { nombreTarea, estado, urgencia} = miTarea
console.log(nombreTarea)

//spreadOperator

let listaCompraLunes:string[] = ["Leche", "huevos"];

let listaComprasMartes: string[] = [...listaCompraLunes, "pan", "Frutas"];

let listaCompraSemana = [...listaCompraLunes, ...listaComprasMartes];
console.log(listaCompraSemana)



// Funciones

/**
 * Funcion que muestra un saludo por consola
 * @param estudiante Nombre de la persona a saludar
 */

let estudiante: string = "Sofia"

function saludar(arr:string) {
    console.log(`Hola ${arr} buenos dias`)
}

//valores opcionales
/**
 * @param name Nombre opcional
 */

function despedirPersona(arr?: string | undefined){
    if(arr) {
        console.log(`Adios ${arr} `)
    } else {
        console.log("Adios")
    }
   
}

let name: string = "Daniel"
saludar(estudiante);

despedirPersona();

function variosParams(nombre: string, apellido?: string, edad: number = 19){

}


let ejemploArrow = ()=>{console.log("Soy una funciona Flecha")}

ejemploArrow();

//documentar Funciones

/**
 * 
 * @param nombre 
 * @param apellidos 
 * @returns 
 */
function ejemploReturn(nombre: string, apellidos: string) : string{
return `${nombre} ${apellidos}`
}


const nombreCompleto = ejemploReturn("Daniel", "lugo");

console.log(nombreCompleto)
console.log( typeof(nombreCompleto))


//factor de propagacion

function ejemploMultiParams(...nombres: string[] ){

}

type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
}

let empleadoOffice : Empleado = {
    nombre: "Martin",
    apellidos: "San Jose",
    edad: 40
}


//arrow functions



const showEmploye = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad} años`


console.log(showEmploye(empleadoOffice))

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 65){
    return `Empleado ${empleado.nombre} está por jubilarse`
  } else {
    return `Empleado ${empleado.nombre} le falta todavia por jubilarse`
  }
}


const consultaJubilacion = datosEmpleado(empleadoOffice);
console.log(consultaJubilacion);

const obtenerSalario = (empleado: Empleado, cobrar: ()=>`Cobrar`) => {
    if (empleado.edad > 65){
        return
      } else {
        cobrar()
      }
}

const cobrarSalario = () => {
  console.log("Cobrar Nómina empleado - level 2")
}



console.log(cobrarSalario())


async function ejemploAsync():Promise<string>{
    //await

    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");

    console.log("Completado")
    return "Complete";

    
}

ejemploAsync()
.then((res)=>{
    console.log("respuesta", res)
})
.catch((error)=>{
    console.log(error,"error")
})
.finally(()=>console.log("todo ok"))


//generadoras

function ejemploGenerator() {
    //yield : sirve para emitir  un nuevo valor


}

//worker

function* watcher(valor:number){
    yield valor;
    yield* worker(valor);
    yield valor + 4;
}

function* worker(valor: number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
    yield valor + 4;
}

let generadorSaga = watcher(5);
console.log(generadorSaga.next().value)


// persistencia de datos

function mostrarError(error: string | number) : void{
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
    name:"usuario",
    value: "value",
    expires: new Date(2099, 10, 1),
    path: "/"
}


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

    public terminar?: () => void;

    public empezar(): void {

        setTimeout(()=>{
            if(!this.terminar) return

            //cuando termine el tiempo se ejecuta
            this.terminar();
        },1000)

    }

}

const miTemporizador: Temporizador = new Temporizador();

//definir la funcion del callback a ejecutar

miTemporizador.terminar = () =>{
    console.log("Hemos terminado la tarea de tiempo")
    console.log("Clases y objetos")

}

//lanzamos el temporizador

miTemporizador.empezar();

// setInterval(()=> console.log("tick"), 1000);



let newName = "Sofia Lugo Diaz"

console.log(newName)