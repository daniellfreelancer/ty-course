import { ITarea, Niveles } from "./interfaces/Persona.interface";


/**
 * 
 */
export class Programar implements ITarea{
    titulo: string;
    descripcion?: string | undefined;
    completado: boolean;
    urgencia?: Niveles | undefined;


    constructor(titulo: string, descripcion: string, completado: boolean, urgencia: Niveles){

        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado;
        this.urgencia = urgencia

    }

    resumen = () :string =>{
        return `Tarea programacion: ${this.titulo} - ${this.completado}`
    }

    }
    
