export class Persona {
    nombre: string;
    apellido: string;
    edad: number;


    constructor( nombre:string, apellido: string, edad: number){
        this.nombre = nombre,
        this.apellido= apellido,
        this.edad = edad
    }

    saludar(): void{
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}


export class EmpleadosPublicos extends Persona{
    sueldo: number;

    constructor(nombre: string, apellido: string, edad: number, sueldo: number){
        super(nombre, apellido, edad)
        this.sueldo = sueldo
    }
    saludar(): void{
        super.saludar()
        console.log(`Mi sueldo es: $ ${this.sueldo}`)
    }
}


export class Jefe extends Persona {
    empleados: EmpleadosPublicos[] = [];

    constructor(nombre:string, apellido: string, edad: number){
        super(nombre, apellido, edad)
    }
}