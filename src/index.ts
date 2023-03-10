import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';
import { Curso } from './models/curso';
import { Estudiante } from './models/Estudiante';
import { LISTA_CURSOS } from './mock/cursos.mock';
import { EmpleadosPublicos, Jefe } from './models/Persona';
import { ITarea, Niveles } from './models/interfaces/Persona.interface';
import { title } from 'process';
import { Programar } from './models/Programacion';
import { Singleton } from './patterns/creacionales/singleton';




console.log("Hola TypeScript Im Daniel ");

//Declaracion de variables:
let nombre: string = 'Daniel';
let edad: number = 37;
let lluvia: boolean = true




const PI = 3.1419;



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
        console.log("La tarea est?? completada")
        break;
    case Estados.incompleto:
    console.log("La tarea no est?? completada")
        break;    
        case Estados.pendiente:
            console.log("La tarea est?? pendiente")
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
        console.log("La tarea est?? completa")
        break
    } else {
        console.log(Tarea1.importancia++)
        console.log("La tarea est?? incompleta")
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



const showEmploye = (empleado: Empleado) => `${empleado.nombre} tiene ${empleado.edad} a??os`


console.log(showEmploye(empleadoOffice))

const datosEmpleado = (empleado: Empleado): string => {
  if (empleado.edad > 65){
    return `Empleado ${empleado.nombre} est?? por jubilarse`
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
  console.log("Cobrar N??mina empleado - level 2")
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

// miTemporizador.terminar = () =>{
//     console.log("Hemos terminado la tarea de tiempo")
//     console.log("Clases y objetos")

// }

//lanzamos el temporizador

miTemporizador.empezar();

// setInterval(()=> console.log("tick"), 1000);




// const cursoTS: Curso = new Curso("Typescript", 15);
// const cursoJS: Curso = new Curso("Javascript", 20);


const listaCursos: Curso[] = LISTA_CURSOS;

// listaCursos.push(cursoJS, cursoTS);


const estudianteA : Estudiante = new Estudiante("Daniel", listaCursos, "Lugo")

console.log(estudianteA)

console.log(estudianteA.horasEstudaidas)




/**
 * Herencia
 * Polimorfismo
 * decoradores
 * intergafes
 * 
 * 
 */

let empleadoA = new EmpleadosPublicos("Martin", "Sabala", 45, 2000)

let empleadoB = new EmpleadosPublicos("Daniel", "Lugo", 36, 1000)

let empleadoC = new EmpleadosPublicos("Pepe", "Trueno", 30, 1200)


empleadoA.saludar()

let jefeA = new Jefe("Pablo", "Garcia", 50)

jefeA.empleados.push(empleadoA, empleadoB, empleadoC)


jefeA.empleados.forEach((empleado : EmpleadosPublicos)=>{
            empleado.saludar();
})


empleadoC.saludar()

jefeA.saludar()



/**
 * uso de interfaces
 */

let programar: ITarea = {
    titulo: 'Programar Typescript',
    descripcion:"Practicar para aprender Typescript",
    completado: false,
    urgencia: Niveles.urgente,
    resumen: function (): string {
       return `${this.titulo} - ${this.completado} - nivel ${this.urgencia}`
    }
}


console.log(programar.resumen());


// Tarea de programacion para implementar ITarea


let programarTS = new Programar("Typescript", "Tarea de Programacion en TS", false, Niveles.Bloqueante)


console.log(programarTS.resumen())



//Decoradores son funciones delcaradas a traves de un simbolo @
// Decoradores experimentales
// Clases
// Parametros
// Metodos
// Propiedades


/**
 * 
 * @param label 
 * @returns 
 */
function Override(label: string){
    return function (target:any, key:string){
        Object.defineProperty(target, key, {
            configurable: false,
            get: ()=> label
        })
    }
}

// class PruebaDecorador {
//     @Override('Prueba')
// }

// let prueba1 = new PruebaDecorador()

function SoloLectura (target:any, key: string){
    Object.defineProperty(target, key, {
        writable: false
    })
}


// class PruebaLectura {
//     @SoloLectura
//     namme: string = " ";
    
// }


// let pruebaTwo = new PruebaLectura()// 
// pruebaTwo.namme = "Daniel"

// console.log(pruebaTwo.namme)

//Patrones de dise??o
//estandarizacion de codigo
/**
 * Patrones Creacionales (orientado al codigo limpio bajo estandares)
 * - Mecanismos de creacion de objetos
 * - Reutilizacion
 * - Flexibilidad al codigo
 * 
 * Patrones estructurales
 * - Eficiencia y flexibilidad de la estructura a la hora de definir clases y objetos
 * -
 * 
 * Patrones de Comportamiento
 * - Centrados en la asignacion efectiva de responsabilidad entre objetos
 * - Comunicacion efectiva entre objetos
 * 
 * 
 * Lectura:
 * refactorin.guru
 */

// * PATRONES CREACIONALES


    const miPrimerSingleton = Singleton.getInstance();
    const miSegundoSingleton = Singleton.getInstance();

    if (miPrimerSingleton === miSegundoSingleton) {
        console.log('Singleton funciona, ambas variables tienen de la misma instancia.');
        miPrimerSingleton.mostrarPorConsola();
        miSegundoSingleton.mostrarPorConsola();
    } else {
        console.log('Singleton fall??, variables tienen diferente instancia.');
    }
