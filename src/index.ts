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